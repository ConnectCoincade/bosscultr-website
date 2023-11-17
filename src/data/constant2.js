import boss1 from '../assets/Boss1-hover.png';
import boss2 from '../assets/Boss2-hover.png'
import boss3 from '../assets/Boss3-hover.png'
import bossOnHover1 from '../assets/table1-Revealed.png'
import bossOnHover2 from '../assets/table2-Revealed.png'
import bossOnHover3 from '../assets/table3-Revealed.png';
import kingCard1 from '../assets/3x/Asset1-king.png';
import kingCard2 from '../assets/3x/Asset2-king.png';
import kingCard3 from '../assets/3x/Asset3-king.png';
import kingCard4 from '../assets/3x/Asset4-king.png';
import cardBack1 from '../assets/3x/Asset1-back.png';
import cardBack2 from '../assets/3x/Asset2-back.png';
import cardBack3 from '../assets/3x/Asset3-back.png';
import cardBack4 from '../assets/3x/Asset4-back.png';
import cardBack5 from '../assets/3x/Asset5-back.png';
import cardBack6 from '../assets/3x/Asset6-back.png';
import cardBack7 from '../assets/3x/Asset7-back.png';
import cardBackLock from '../assets/3x/Asset8-back-lock.png';
import cardForMobile from '../assets/3x/cardForMobile.png'

export const items = [
    {
      id: 1,
      url: ' https://imgur.com/eGvAtmh.png',
      urlOnHover:'https://imgur.com/YHIl6g8.png',
      cardForMobile:cardForMobile,
      title:`Nova Starling (Blue Nomad Syndicate)`,
      description:`Visionary leader of the freedom-loving Nomad Syndicate. Drives the advanced "Quasar" customized to push the limits. Cares for members but hides a simmering rage at defeat. Relies on cunning and technical creativity to beat rivals.`,
      tags: ["Mountains", "Aesthetic", "Pretty", "Scenic", "Rugged"],
      color:"blue"
    },
    {
      id: 2,
      url: 'https://imgur.com/hUCBlt7.png',
      urlOnHover:'https://imgur.com/1MOypWh.png',
      title:`Blackheart Beaumont (Black Star Syndicate)`,
      description:`Enigmatic leader shrouded in darkness. Drives the stealthy "Voidrunner" equipped with forbidden weapons. Ruthless in pursuit of his goals yet shows hints of buried nobility. Trusts no one and relies on forbidden knowledge to prove supremacy.`,
      tags: ["Mountains", "Aesthetic", "Pretty", "Scenic", "Rugged"],
      color:"gray"
    },
    {
      id: 3,
      url: 'https://imgur.com/ErPE8KM.png',
      urlOnHover:'https://imgur.com/SaBUB4O.png',
      title:`Velkor the Vicious (Red Star Syndicate)`,
      description:`Ruthless leader who will stop at nothing to achieve racing domination. Drives the menacing "Red Rocket" armed with devastating weapons and speed boosters. Rules through intimidation yet inspires loyalty from his inner circle. Winning is all that matters, no matter the cost.`,
      tags: ["Mountains", "Aesthetic", "Pretty", "Scenic", "Rugged"],
      color:"red"
    }
  ];

  export const cardItems = [
    {
      id: 1,
      url: cardBack5,
      urlOnHover:kingCard1,
      title: "PHASE-I",
      cardForMobile:cardForMobile,
      description: `<li>Opening of discord to public</li>
      <li>Twitter marketing campaign</li>
      <li>Collab with top Projects Daos</li>
      <li>Announcing web 2 and web3 partners.</li>
      <li>Announcing white-paper/utilities</li>
      <li>Bosscultr - Website Launch</li>
      `,
      lock:false
    },
    {
      id: 2,
      url: cardBackLock,
      // urlOnHover:kingCard2,
      urlOnHover:cardBackLock,
      title: "Card-II",
      description: `<li>Announce mint date/ price.</li>
      <li>Announce roadmap Post-MInt.</li>
      <li>Beta Access of Retro Racers to OG and WL Members.</li>
      <li>Mint Day.</li>
      `,
      lock:true
    },
    {
      id: 3,
      url: cardBackLock,
      // urlOnHover:kingCard3,
      urlOnHover:cardBackLock,
      title: "Card-III",
      description: `<li>Retro Racers - Launch website</li>
      <li>Retro racers game launch.</li>
      <li>Social Launch for Retroracers.</li>
      <li>Announcing web 2 and web3 partners.</li>
      <li>Announcing white-paper/utilities.</li>
      `,
      lock:true
    },
    {
      id: 4,
      url: cardBackLock,
      // urlOnHover:kingCard4,
      urlOnHover:cardBackLock,
      title: "Card-IV",
      description: "Lorem ipsum card4",
      lock:true
    }

  ]