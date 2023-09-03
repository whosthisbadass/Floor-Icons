const FLOOR_ICONS_MAP = {
  "attic": {
    "keywords": [],
    "path": "M 12 3 L 2 12 L 5 12 L 5 20 L 19 20 L 19 12 L 22 12 L 12 3 z M 11 8 L 13 8 C 14.1 8 15 8.89 15 10 L 15 18 L 13 18 L 13 15 L 11 15 L 11 18 L 9 18 L 9 10 C 9 8.89 9.9 8 11 8 z M 11 10 L 11 13 L 13 13 L 13 10 L 11 10 z "
  },
  "basement": {
    "keywords": [],
    "path": "M 12 3 L 2 12 L 5 12 L 5 20 L 19 20 L 19 12 L 22 12 L 12 3 z M 9 8 L 13 8 C 14.1 8 15 8.89 15 10 L 15 11.5 C 15 12.328427 14.328427 13 13.5 13 C 14.328427 13 15 13.671573 15 14.5 L 15 16 C 15 17.104569 14.104569 18 13 18 L 9 18 L 9 8 z M 11 10 L 11 12 L 13 12 L 13 10 L 11 10 z M 11 14 L 11 16 L 13 16 L 13 14 L 11 14 z "
  },
  "first": {
    "keywords": [],
    "path": "M 12 3 L 2 12 L 5 12 L 5 20 L 19 20 L 19 12 L 22 12 L 12 3 z M 10 8 L 14 8 L 14 18 L 12 18 L 12 10 L 10 10 L 10 8 z "
  },
  "ground": {
    "keywords": [],
    "path": "M 12,3 2,12 h 3 v 8 h 14 v -8 h 3 z m -1,5 h 4 v 2 h -4 v 6 h 2 v -4 h 2 v 4 c 0,1.11 -0.9,2 -2,2 H 11 C 9.9,18 9,17.11 9,16 V 10 C 9,8.89 9.9,8 11,8 Z"
  },
  "loft": {
    "keywords": [],
    "path": "M 12 3 L 2 12 L 5 12 L 5 20 L 19 20 L 19 12 L 22 12 L 12 3 z M 9 8 L 11 8 L 11 16 L 15 16 L 15 18 L 9 18 L 9 8 z "
  },
  "second": {
    "keywords": [],
    "path": "M 12 3 L 2 12 L 5 12 L 5 20 L 19 20 L 19 12 L 22 12 L 12 3 z M 9 8 L 13 8 C 14.1 8 15 8.8899998 15 10 L 15 12 C 15 13.104569 14.10457 14 13 14 L 11 14 L 11 16 L 15 16 L 15 18 L 9 18 L 9 14 C 9 12.89543 9.8954308 12 11 12 L 13 12 L 13 10 L 9 10 L 9 8 z "
  }
};

async function getIcon(name) {
  return {path: FLOOR_ICONS_MAP[name]?.path};
}
async function getIconList() {
  return Object.entries(FLOOR_ICONS_MAP).map(([icon, content]) => ({
    name: icon,
    keywords: content.keywords,
  }));
}

window.customIcons = window.customIcons || {};
window.customIcons["floor"] = { getIcon, getIconList };

window.customIconsets = window.customIconsets || {};
window.customIconsets["floor"] = getIcon;
