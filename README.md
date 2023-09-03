[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/hacs/integration)

# hass-floor-icons

Custom icon pack designed for Home Assistant.

## Floor Icons

![Preview](./svg/attic.svg) attic `<br />`
![Preview](./svg/basement.svg) basement `<br />`
![Preview](./svg/first.svg) first `<br />`
![Preview](./svg/ground.svg) ground `<br />`
![Preview](./svg/loft.svg) loft `<br />`
![Preview](./svg/second.svg) second `<br />`

## Install

### HACS

Add this repo via HACS as a plugin and install.  See the [HACS install guide](./HACS_INSTALL.md) for step by step instructions.

### Manual

Copy the `hass-floor-icons.js` file into `<config>/www/` where `<config>` is your home-assistant config directory (the directory where your `configuration.yaml` resides).

Add the folowing to the `frontend` section of your `configuration.yaml`

```yaml
frontend:
  extra_module_url:
    - /local/hass-floor-icons.js
```

Or add the following to your lovelace configuration using the Raw Config editor under Configure UI or ui-lovelace.yaml if using YAML mode.

```yaml
resources:
  - type: js
    url: /local/hass-floor-icons.js
```

Restart home-assistant.

## Using

The icons uses the prefix `floor:`.

Example:

```
entities:
  - entity: light.floor_lamp
    icon: 'floor:attic'
    name: floor-lamp
  - entity: light.floor_lamp_dual
    icon: 'floor:second'
    name: floor-lamp-dual
show_header_toggle: false
title: hass-bha-icons
type: entities
```

## FAQ

Q: The icon ain't showing, it's just white space where it should be. What's up with that?

A: Probably related to cache. Try opening your instance in a incognito/private Window and see if your icon shows then. If yes, it's cache related. If not, spellcheck.

## Thanks

Thanks to @thomasloven, as I used his hass-fontawesome as a template for this pack

Thanks to @prairiesnpr, @kmlucy, @GeorgeSG, @shbatm, @clemalex824 and @rautesamtr for their contributiuons
