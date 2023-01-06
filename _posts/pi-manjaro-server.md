---
title: 'Raspberry PI media server with Manjaro'
excerpt: 'Instructions to set up a media server running Manjaro ARM Minimal (Yes! manjaro). I wrote this "guide", mostly to remember myself in the future but feel free to follow along....'
coverImage: '/assets/blog/pi-manjaro-server/pi.svg'
date: "2022-10-16T13:30:00.000Z"
author:
  name: Pablo
  picture: ''
ogImage:
  url: '/assets/blog/pi-manjaro-server/pi.svg'
width: '911'
height: '637'
---

Instructions to set up a media server running [Manjaro ARM Minimal](https://manjaro.org/download/) (Yes! manjaro). I wrote this "guide", mostly to remember myself in the future but feel free to follow along.

## Why Manjaro?
After trying [DietPi](https://dietpi.com/) and completely breaking the system after I did something wrong while updating it, I decided to try Manjaro ARM instead, which was super easy to set up. I know that neither Manjaro nor Arch are meant to be used on a server system, but it's been working fine on my Raspberry Pi4 for almost 2 years.

While Manjaro offers access to [AUR](https://aur.archlinux.org/) packages I've decided to use docker instead for packages that aren't available on Manjaro repos.

## Configuration

0. Connect to network using ethernet

1. Update mirrors & installed packages

	`# pacman-mirrors --fasttrack && pacman -Syyu`

2. Install network manager

	`# pacman -S networkmanager`

3. Connect to wifi using 'nmtui'

4. Setup up SFTP
	Change `PasswordAuthentication yes` on `/etc/ssh/sshd_config` file.

5. Install docker
	`# pacman -S docker`
* * *
### Docker containers

You should probably check the commands first in [Docker Hub](https://hub.docker.com/) and use docker-compose instead. Make sure to change the paths.

- Portainer
	- `# docker run -d -p 8000:8000 -p 9443:9443 --name portainer --restart=unless-stopped -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce`
- Plex
	- `# docker run -d --name=plex --net=host -e PUID=1000 -e PGID=1000 -e VERSION=latest -v /home/pablo/config/plex:/config -v "/mnt/data/Videos/TV Shows":/tv -v /mnt/data/Videos/Movies:/movies --restart unless-stopped lscr.io/linuxserver/plex:latest`
- Radarr
	- `# docker run -d --name=radarr -e PUID=1000 -e PGID=1000 -e TZ=Europe/Madrid -p 7878:7878 -v /home/pablo/config/radarr:/config -v /mnt/data:/data --restart unless-stopped lscr.io/linuxserver/radarr`
- Transmission
	- `# docker run -d --name=transmission -e PUID=1000 -e PGID=1000 -e TZ=Europe/Madrid -e USER=pablo -e PASS=cloer456 -p 9091:9091 -p 51413:51413 -p 51413:51413/udp -v /home/pablo/config/transmission:/config -v /mnt/data/Downloads:/data/Downloads --restart unless-stopped lscr.io/linuxserver/transmission:latest`
- Jackett
	- `# docker run -d --name=jackett -e PUID=1000 -e PGID=1000 -e TZ=Europe/Madrid -e AUTO_UPDATE=true -p 9117:9117 -v /home/pablo/config/jackett:/config -v /mnt/data/Downloads:/downloads --restart unless-stopped lscr.io/linuxserver/jackett:latest`
- Sonarr
	- `# docker run -d --name=sonarr -e PUID=1000 -e PGID=1000 -e TZ=Europe/Madrid -p 8989:8989 -v /home/pablo/config/sonarr:/config -v /mnt/data:/data --restart unless-stopped lscr.io/linuxserver/sonarr:latest`
- Homer
	- `# docker run -d --name=homer -e UID=1000 -e GID=1000 -p 80:8080 -v /home/pablo/config/homer:/www/assets --restart=unless-stopped b4bz/homer:latest`
- Calibre-web
	- `# docker run -d --name=calibre-web -e PUID=1000 -e PGID=1000 -e TZ=Europe/Madrid -e DOCKER_MODS=linuxserver/calibre-web:calibre -p 8083:8083 -v /home/pablo/config/calibre:/config -v /mnt/data/pi-calibre-library:/books --restart unless-stopped lscr.io/linuxserver/calibre-web:latest`
- Immich
	- Install following the [official documentation](https://github.com/immich-app/immich#custom-installation-recommended).

* * *
### Other packages
Some packages I installed from Manjaro's repositories.

- Syncthing - to sync folders and files across different devices on my LAN (port 8384).
	Install and enable in each device:
	- `# pacman -S syncthing`
	- `# systemctl enable syncthing@pablo.service`
	- `# systemctl start syncthing@pablo.service`
8. Cockpit - an admin panel for the server, useful to see systemd services logs among other things (port 9090).
	- `# pacman -S cockpit`
	- For some reason I started having issues accessing cockpit with Firefox but it's fine on Chromium based browsers.
9. I've also set up some telegram bots, using [systemd](https://unixcop.com/how-to-create-a-systemd-service-in-linux/).

* * *