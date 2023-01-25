---
title: "Fix Elite Dangerous issues on linux"
excerpt: "How to remove DRM from books downloaded on Kobo store"
coverImage: "/assets/blog/minedlauncher/cover.png"
date: "2023-01-25T23:40:00.000Z"
author:
  name: Pablo
  picture: ""
ogImage:
  url: "/assets/blog/minedlauncher/cover.png"
width: "2560"
height: "1440"
---

## How to fix Elite Dangerous launcher issues on linux

Elite Dangerous used to be playable out the box using Steam proton but for some reason in the last few years it has become an immense hassle to play Elite Dangerous on linux. While the game itself runs fine most of the times the launcher itself it's the one causing issues and it's completely broken under Linux.

Sadly, Frontier Developments doesn't seem to care enough about Linux users, so we might need to try many of the solutions that users have suggested at [protondb](https://www.protondb.com/app/359320) and see if anything works, which in my case they never did, except one.

After many months of not being able to launch the game, I randomly found out that there is a third-party launcher called [min-ed-launcher](https://github.com/rfvgyhn/min-ed-launcher/) (_Minimal Elite Dangerous Launcher_) that replaces the original launcher and runs directly from terminal. And it just works!

## How to install Min-Ed-Launcher

You can simply [download it](https://github.com/rfvgyhn/min-ed-launcher/releases/latest) from their github but in my case I got it from the [AUR](https://aur.archlinux.org/packages?O=0&K=min-ed-launcher).

```
yay -S min-ed-launcher-bin
```

Next I've changed the game Launch Options on Steam to launch Elite Dangerous Odyssey expansion using Konsole and [prime-run](https://wiki.archlinux.org/title/PRIME):

```
konsole -e prime-run MinEdLauncher %command% /autorun /autoquit /edo
```

You will probably better off when you read MinEdLauncher [documentation](https://github.com/rfvgyhn/min-ed-launcher#readme) and set up to your own configuration.

Then launch the game and enjoy.

<img src="/assets/blog/minedlauncher/minedlauncher.png" alt="List command image" width="720"/>

That's all.

Bye
