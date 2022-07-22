# Pestercord Noises

Pestercord Noises is a [BetterDiscord](https://betterdiscord.app/) plugin which changes some of Discord's default noises to be Pesterchum themed! 

There are two versions of this plugin, which change different noises:
- **Default (pestercord-noises.plugin.js)**
  - Message receive noise -> Pesterchum chat open noise
  - Call join noise -> Downshifted Pesterchum chat open noise
  - Call disconnect noise (and other person disconnect noise) -> Pesterchum chat close noise
- **Call (pestercord-noises-call.plugin.js)**
  - Call join noise -> Pesterchum chat open noise
  - Call disconnect noise (and other person disconnect noise) -> Pesterchum chat close noise

This plugin was made to be used alongside the [Pestercord 4/13 Edition Theme](https://github.com/luminaryFlowers/Pesterchum-Discord-Theme), so check that out also!

1. To install BetterDiscord, first follow the instructions in the Pestercord 4/13 Edition Theme link above. Note that you don't need to follow the instructions past where you install BetterDiscord! (Unless you're wanting a Pesterchum themed Discord to accompany the noises!)

2. Navigate to the releases page of this repository, located [here](https://github.com/luminaryFlowers/pestercord-noises/releases). Here, you'll want to download the latest release's "pestercord-noises.plugin.js" file, or the "pestercord-noises-call.plugin.js" (depending on which version you want).

3. Inside of Discord, navigate to the "Plugins" tab of the Discord settings, and click on the "Open Plugins Folder" button.

  ![image](https://user-images.githubusercontent.com/71102109/171110196-d3d2b1b2-88d8-498f-bda2-043c0c9c1cc4.png)

4. Put the pestercord-noises.plugin.js (or pestercord-noises-call.plugin.js) file directly into the plugins folder.

5. The plugin should now appear in the Plugins tab of the Discord settings. You'll have to enable it now!

6. Restart Discord. (CTRL + R works peachy for this! It might be CMD + R on Mac?)

7. You're done! Keep in mind that the first instance of each noise playing will be the Discord default, but the second instance onward will be the Pesterchum noise proper! That'll be the case every time you restart Discord, by the way.
