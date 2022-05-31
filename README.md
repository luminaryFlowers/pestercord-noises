# Pestercord Noises

Pestercord Noises is a [BetterDiscord](https://betterdiscord.app/) plugin which changes Discord's default call connect and disconnect noises into the Pesterchum chat open/close noise!

This plugin was made to be used alongside the [Pestercord 4/13 Edition Theme](https://github.com/luminaryFlowers/Pesterchum-Discord-Theme), so check that out also!

1. To install BetterDiscord, first follow the instructions in the Pestercord 4/13 Edition Theme link above. Note that you don't need to follow the instructions past where you install BetterDiscord! (Unless you're wanting a Pesterchum themed Discord to accompany the noises!)

2. Navigate to the releases page of this repository, located [here](https://github.com/luminaryFlowers/pestercord-noises/releases). Here, you'll want to download the latest release's "pestercord-noises.plugin.js" file.

3. Once BetterDiscord is properly installed, you must connect and disconnect from a call. This is so that Discord makes references to the audio files, which lets the plugin properly point Discord to the Pesterchum noises! 

4. Inside of Discord, navigate to the "Plugins" tab of the Discord settings, and click on the "Open Plugins Folder" button.

  ![image](https://user-images.githubusercontent.com/71102109/171110196-d3d2b1b2-88d8-498f-bda2-043c0c9c1cc4.png)

5. Put the pestercord-noises.plugin.js file directly into the plugins folder.

6. The plugin should now appear in the Plugins tab of the Discord settings. You'll have to enable it now!

7. You're done! Joining a voice channel should now make the noise of starting a Pesterchum chat, and disconnecting should make the noise of closing one.

## Things to note
After you've restarted Discord, the first instance of joining and leaving a call will have the respective default Discord noises. This is because I couldn't for the life of me figure out a way to preemptively change the noise, without Discord first loading it.
