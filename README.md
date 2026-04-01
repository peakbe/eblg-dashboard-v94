# 🛫 EBLG Operational Dashboard  
**Monitoring ATC / METAR / TAF / FIDS / Sonometers / Runway Ops**

Un tableau de bord professionnel et modulaire pour la surveillance opérationnelle de l’aéroport de Liège (EBLG).  
Développé pour offrir une vue unifiée des données météo, des pistes actives, du trafic aérien, des sonomètres et des services associés.

---

## ✨ Fonctionnalités principales

### 🛰️ Données aéronautiques
- **METAR** en temps réel (via proxy Render)
- **TAF** complet
- Détection automatique de la **piste active** (QFU 22/04)
- Calcul du **crosswind** et de l’angle vent/piste
- Visualisation du **corridor d’approche/départ**

### 🗺️ Carte interactive (Leaflet)
- Piste dessinée en haute précision
- Corridors dynamiques
- Sonomètres géolocalisés
- Popup + tooltip + panneau latéral détaillé
- **Heatmap dynamique** selon le statut des sonomètres

### 🔊 Sonomètres
- Statut dynamique (vert / rouge / neutre)
- Surlignage automatique dans la liste lors d’un clic sur la carte
- Panneau latéral détaillé :
  - Adresse
  - Commune
  - Statut
  - Distance à la piste active
- Mini-graphique (canvas) des répartitions

### 🛬 FIDS
- Arrivées / départs
- Statuts colorés : On Time, Delayed, Boarding, Cancelled

### 🧩 Architecture modulaire
- Code découpé en modules ES6 (`import/export`)
- Documentation JSDoc générable automatiquement
- Structure claire et maintenable

### 📱 Responsive + Sidebar repliable
- Interface adaptée mobile/tablette
- Menu latéral repliable façon “Ops Room”

---

## 📦 Installation

### 1. Cloner le dépôt

```bash
git clone https://github.com/ton-repo/eblg-dashboard.git
cd eblg-dashboard
