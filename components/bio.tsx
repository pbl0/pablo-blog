import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, faYoutube} from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import ThemeChanger from './theme-changer'

const Bio = ()=>{

    const social = [
        {url:'github.com/pbl0', icon: faGithub},
        {url:'instagram.com/hipi__hapa', icon: faInstagram},
        {url:'www.youtube.com/channel/UCoI4HY4K4CB_J8O_Mphlnbw', icon: faYoutube}
    ]

    let links = []

    for (let item of social){
        if (item.url != ''){
            let link = (
                <div key={item.url} className='column mr-1 is-4'>
                    <a href={`https://${item.url}`}>
                        <FontAwesomeIcon className='' icon={item.icon} size="2x"/>
                    </a>
                </div>

            )
    
            links.push(link)
        }

    }

    return (
        <div className="column my-6">
            <div className="columns is-mobile is-pulled-right">
                <ThemeChanger></ThemeChanger>
                {links}
            </div>
            
        </div>
    )
}

export default Bio