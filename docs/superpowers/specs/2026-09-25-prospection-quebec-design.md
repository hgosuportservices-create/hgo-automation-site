# Prospection Québec : plateforme CRM nettoyage de conduits

Date : 25/09/2026. Statut : conception validée à l'oral, à relire.

## 1. Objectif

Signer des entreprises de nettoyage de conduits au Québec en leur proposant la plateforme CRM déjà en production chez Groupe Rousso, adaptée à chacune.

- **Succès** : des appels de 20 minutes réservés (Cal.com) avec des dirigeants québécois.
- **Contrôle** : rien ne part vers un prospect sans validation d'Hugo dans Telegram (premier message et chaque relance).
- **Discrétion** : Rousso n'est jamais nommé auprès des prospects. On parle d'« une entreprise de nettoyage de conduits à Montréal ». Le résultat (52 000 $ CAD en 2 mois, 85 % de devis convertis) reste utilisable de façon anonyme.
- **Propriété** : le code appartient à Hugo, qui peut le revendre.
- **Prix** : « sur devis » pour le moment (page et messages).

## 2. Découpage et ordre de construction

1. Démo en marque blanche de la plateforme + page de présentation.
2. Bot Telegram « HGO Prospection » et groupe à sujets.
3. Table et workflows n8n.
4. Consignes d'OpenClaw (l'enquêteur).
5. Test réel sur 5 prospects, puis ajustements.

Chaque brique est utilisable seule et testée avant de passer à la suivante.

## 3. L'offre : plateforme en marque blanche

### 3.1 Démo « Conduits Pro Démo » (nom provisoire)
- Copie du projet `ACTIFS/rousso-devis` (Flask) dans un nouveau dépôt. Le projet Rousso n'est pas modifié.
- Le nom, le logo, les couleurs, la grille de prix, les taxes et les coordonnées sortent du code et passent dans un fichier de configuration. « Groupe Rousso » est aujourd'hui écrit en dur dans environ 50 fichiers.
- Données fictives : une quinzaine de clients, devis, plans d'entretien et relances.
- Intégrations externes coupées ou en mode démo : Progression Live désactivé, e-mails redirigés vers une adresse de test HGO, pas d'Outlook ni de Microsoft Graph.
- Hébergée à part sur Railway, avec un accès démo protégé par mot de passe.
- Critère : aucune occurrence de « Rousso » ni aucune donnée réelle dans le dépôt de la démo.

### 3.2 Un client = une installation
Chaque nouveau client reçoit sa propre copie (sa configuration, son hébergement, ses données). Pas de plateforme partagée entre plusieurs entreprises.

### 3.3 Page de présentation
- URL : `hgoautomation.fr/crm-nettoyage-conduits`, dans le site React existant, pré-rendue et ajoutée au sitemap.
- Contenu : le problème (devis lents, relances oubliées), les fonctions, les captures de la démo, le résultat anonyme, « sur devis », et le bouton de réservation (`/rendez-vous`).
- Rousso n'y est pas nommé.

## 4. Organisation Telegram

| Bot | Rôle | Interlocuteur |
|---|---|---|
| OpenClaw (existant, VPS) | Assistant d'Hugo : il cherche les prospects à la demande | Hugo |
| HGO Post Bot (existant) | Posts LinkedIn uniquement | n8n |
| HGO Prospection (nouveau) | Prospection uniquement | n8n |

Un groupe privé « Prospection Québec » (Hugo et le bot HGO Prospection) est découpé en sujets :
- 🆕 **Nouveaux prospects** : chaque fiche reçue.
- ✍️ **À valider** : chaque message (premier contact, relance J+3, relance J+7), avec les boutons ✅ Envoyer / 🔁 Réécrire / ❌ Écarter.
- 💬 **Réponses** : chaque réponse de prospect, avec une proposition de réplique et le lien Cal.com.
- 📊 **Bilan** : le résumé quotidien.

Hugo crée lui-même le bot (BotFather), le groupe et ses sujets, et colle la clé du bot dans n8n. Claude ne manipule pas les clés.

## 5. OpenClaw : l'enquêteur

**Déclenchement** : Hugo lui écrit sur Telegram, par exemple « Cherche 10 entreprises de nettoyage de conduits à Laval et Longueuil ».

**Pour chaque entreprise, il remplit une fiche :**
- nom, ville, site, téléphone ;
- adresse courriel **et l'URL de la page où elle est publiée** (obligatoire, sinon la fiche est rejetée) ;
- nom du dirigeant, s'il est visible ;
- note et nombre d'avis Google ;
- 2 ou 3 points faibles vérifiables et sourcés : pas de devis en ligne, formulaire basique, avis négatifs sur les délais, site non adapté au téléphone… ;
- un premier message personnalisé, rédigé selon le modèle de la section 7.

**Règles :**
- Il vérifie les doublons (même domaine ou même nom) avant l'envoi.
- Il transmet chaque fiche au webhook n8n « Réception des fiches » (JSON).
- Il ne contacte jamais un prospect lui-même.
- Il n'invente rien : un champ inconnu reste vide.
- Il ne cite jamais Rousso.

## 6. n8n : le moteur

Dossier n8n « Prospection Québec ». Fuseau des workflows : America/Montreal.

### 6.1 Table « Prospects Québec »
- **Colonnes** : id, entreprise, ville, site, telephone, email, source_email, dirigeant, note_google, nb_avis, points_faibles, message_1, statut, etape, derniere_action_le, prochaine_relance_le, notes.
- **Statuts** : `nouveau` → `a_valider` → `envoye` → `relance_1` → `relance_2` → `a_repondu` → `rdv` → `gagne` / `perdu` / `stop`.
- **Import initial** : les 20 entreprises du Google Sheet « Prospection Quebec - Ventilation ». Les 8 contactées le 01/08/2026 reçoivent la note « contacté le 01/08 » et la date d'envoi correspondante, pour ne pas être recontactées avant 3 mois.

### 6.2 Workflows
1. **Réception des fiches** (webhook sécurisé par un en-tête secret) : contrôle des champs obligatoires et des doublons, enregistrement (`nouveau`), publication dans 🆕, puis passage du message à `a_valider` et publication dans ✍️.
2. **Validation Telegram** (boutons) :
   - ✅ met le message en file d'envoi ;
   - 🔁 demande une autre version à Claude et la republie dans ✍️ ;
   - ❌ passe le prospect en `perdu`.
3. **Envois et relances** :
   - Envoi uniquement de 9h à 16h (heure de Montréal), du lundi au jeudi, au maximum 10 par jour, depuis hugo@hgoautomation.fr (SMTP existant).
   - Les relances J+3 et J+7 sont préparées automatiquement, puis **validées une par une** dans ✍️.
4. **Réponses et bilan** :
   - Toutes les 15 minutes, lecture de la boîte hugo@hgoautomation.fr. Une réponse d'un prospect connu arrête ses relances, passe son statut à `a_repondu` et arrive dans 💬 avec une proposition de réplique et le lien Cal.com.
   - « STOP » ou un refus clair passe le prospect en `stop`, définitivement.
   - Chaque matin à 8h (heure de Paris), le bilan est publié dans 📊.

### 6.3 Erreurs
- Tout échec (envoi, lecture de boîte, webhook) prévient Hugo dans 📊, via le workflow d'erreur existant ou un message direct.
- Un envoi qui échoue n'est pas retenté automatiquement plus d'une fois.

## 7. Messages

### 7.1 Premier message (modèle, adapté par OpenClaw)
> Bonjour [Prénom],
> Une entreprise de nettoyage de conduits à Montréal génère maintenant 52 000 $ en 2 mois avec 85 % de devis convertis. Ses devis partent en quelques clics avec des créneaux de rendez-vous, et les relances se font seules.
> En regardant [Entreprise], j'ai remarqué [point faible précis].
> 20 minutes cette semaine pour vous montrer l'outil avec votre entreprise dedans ?

### 7.2 Relances
- **J+3** : relance courte, avec une capture de la démo.
- **J+7** : dernier message poli (« je ferme le dossier »).

### 7.3 Mise en forme aux couleurs HGO
- Corps en texte simple et aéré. Un seul accent cyan HGO, sur le point faible.
- Signature soignée : logo HGO, nom, « Consultant IA pour artisans du bâtiment », téléphone, site, bouton cyan « Réserver 20 min » vers `/rendez-vous`.
- Pas de bannière ni de visuel lourd dans le premier message.
- Un aperçu du mail est présenté à Hugo et validé avant la construction des workflows.

### 7.4 Conformité avec la loi canadienne anti-pourriel (LCAP)
- On ne contacte que des adresses publiées par l'entreprise, et la source est conservée.
- Chaque message concerne l'activité du destinataire.
- Chaque message indique l'identité d'Hugo et ses coordonnées complètes.
- Chaque message contient « Répondez STOP pour ne plus recevoir mes messages ». Un STOP est respecté immédiatement et pour toujours.

## 8. Tests
- **Démo** : aucune occurrence de « Rousso » (recherche dans le code et les PDF générés) ; un devis de démo est généré de bout en bout.
- **Workflows** : une fiche test envoyée au webhook → réception dans 🆕 et ✍️ → ✅ → mail reçu sur une adresse de test → réponse test → arrivée dans 💬 et arrêt des relances → « STOP » → statut `stop`.
- **Premier vrai lot** : 5 prospects, chaque message relu par Hugo.

## 9. Hors périmètre (pour plus tard)
- Prix affichés et paiement en ligne.
- Plateforme partagée entre plusieurs clients.
- Prospection par téléphone ou par LinkedIn automatisée.
- Anonymisation de la page cas client Rousso sur le site. À décider si la discrétion l'exige.
