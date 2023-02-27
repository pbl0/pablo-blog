import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faYoutube,
  IconDefinition,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import ThemeChanger from "./theme-changer";

interface socialItem {
  url: string;
  icon: IconDefinition;
  title: string;
}

const Bio = () => {
  const social: socialItem[] = [
    { url: "github.com/pbl0", icon: faGithub, title: "Github" },
    { url: "t.me/pablobls", icon: faTelegram, title: "Telegram" },
    {
      url: "www.youtube.com/channel/UCoI4HY4K4CB_J8O_Mphlnbw",
      icon: faYoutube,
      title: "Youtube",
    },
  ];

  let links = [];

  for (let item of social) {
    if (item.url != "") {
      let link = (
        <div key={item.url} className="column mr-1 is-2-mobile">
          <a title={item.title} href={`https://${item.url}`}>
            <FontAwesomeIcon className="my-icon" icon={item.icon} />
          </a>
        </div>
      );

      links.push(link);
    }
  }

  return (
    <div className="column my-6 bio">
      <div className="columns is-mobile is-pulled-right">
        <ThemeChanger></ThemeChanger>
        {links}
      </div>
    </div>
  );
};

export default Bio;
