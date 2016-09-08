'use strict';

/**
 * @ngdoc function
 * @name artisanalTelevisionApp.controller:VideoCtrl
 * @description
 * # VideoCtrl
 * Controller of the artisanalTelevisionApp
 */
angular.module('artisanalTelevisionApp')
  .controller('VideoCtrl', function (videoFinder) {
    this.videoItems = [
    {
    "category": "reels",
    "category": "",
    "artist": "",
    "title": "Director Reel",
    "modalId": 1,
    "img": "directors_reel.png",
    "link": "https://player.vimeo.com/video/30290109?title=0&byline=0&portrait=0"
  },
  {
    "category": "reels",
    "artist": "",
    "title": "Producer/Editor Reel",
    "modalId": 2,
    "img": "producer_editor.png",
    "link": "https://player.vimeo.com/video/107299737?title=0&byline=0&portrait=0"
  },
  {
    "category": "reels",
    "artist": "",
    "title": "Motion Design Reel",
    "modalId": 3,
    "img": "graphics_reel.png",
    "link": "https://player.vimeo.com/video/104203316?title=0&byline=0&portrait=0"

  },
  {
    "category": "music",
    "artist": "Alyson Greenfield",
    "title": "Uncharted Places",
    "modalId": 4,
    "img": "unchartered.png",
    "link": "https://www.youtube.com/embed/FiQ-oREsS8c?rel=0?VQ=HD720"

  },
  {
    "category": "music",
    "artist": "Lemonade",
    "title": "Softkiss",
    "modalId": 5,
    "img": "softkiss.png",
    "link": "https://www.youtube.com/embed/n4-ZsUM8bWk?rel=0?VQ=HD720"

  },
  {
    "category": "music",
    "artist": "Luscious Jackson",
    "title": "#1 Bum",
    "modalId": 6,
    "img": "bum.png",
    "link": "https://www.youtube.com/embed/Qd669AlC-cU?rel=0?VQ=HD720"

  },
  {
    "category": "music",
    "artist": "Black Taxi",
    "title": "Hand",
    "modalId": 7,
    "img": "hand.png",
    "link": "https://www.youtube.com/embed/4EKO55kpSIM?rel=0?VQ=HD720"

  },
  {
    "category": "music",
    "artist": "Black Taxi",
    "title": "House on Fire",
    "modalId": 8,
    "img": "house_on_fire.png",
    "link": "https://www.youtube.com/embed/gXXK-iSEzFc?rel=0?VQ=HD720"

  },
  {
    "category": "music",
    "artist": "Black Taxi",
    "title": "Up Here For Thinking, Down There For Dancing",
    "modalId": 9,
    "img": "up_here.png",
    "link": "https://www.youtube.com/embed/beIdC1SHgZo"

  },
  {
    "category": "music",
    "artist": "Chainwave",
    "title": "Just Break",
    "modalId": 10,
    "img": "just_break.png",
    "link": "https://player.vimeo.com/video/26408117?title=0&byline=0&portrait=0"

  },
  {
    "category": "music",
    "artist": "Mighty High",
    "title": "Buy The Pound",
    "modalId": 11,
    "img": "mighty_high.png",
    "link": "https://www.youtube.com/embed/FP3MT5ejP_o?rel=0?VQ=HD720"

  },
  {
    "category": "music",
    "artist": "Big Game",
    "title": "Big Game",
    "modalId": 12,
    "img": "big_game.png",
    "link": "https://www.youtube.com/embed/VDa1Uc7WtVI?rel=0?VQ=HD720"

  },
  {
    "category": "music",
    "artist": "Pet Ghost Project",
    "title": "They Built a City in my Country Mind",
    "modalId": 13,
    "img": "pet_ghost.png",
    "link": "https://www.youtube.com/embed/UdKMDzJGpcI?rel=0?VQ=HD720"

  },
  {
    "category": "music",
    "artist": "Knifekick",
    "title": "Wanna Be With You",
    "modalId": 14,
    "img": "wanna_be.png",
    "link": "https://www.youtube.com/embed/YOWYuiLZ5NM"

  },
  {
    "category": "music",
    "artist": "Blackbells",
    "title": "One by One",
    "modalId": 15,
    "img": "one_by_one.png",
    "link": "https://www.youtube.com/embed/ztJyqM09I5o"

  },
  {
    "category": "commercial",
    "artist": "Brooklyn Botanic Garden",
    "title": "A Day in The Garden",
    "modalId": 16,
    "img": "botanic_garden.png",
    "link": "https://player.vimeo.com/video/81651249?title=0&byline=0&portrait=0"

  },
  {
    "category": "commercial",
    "artist": "Brooklyn Botanic Garden",
    "title": "The Chlidren's Garden",
    "modalId": 17,
    "img": "childrens_garden.png",
    "link": "https://player.vimeo.com/video/90543169?title=0&byline=0&portrait=0"

  },
  {
    "category": "commercial",
    "artist": "Stephen Savage",
    "title": "Little Tug",
    "modalId": 18,
    "img": "little_tug.png",
    "link": "https://www.youtube.com/embed/F4mgqpMw7Xs?rel=0?VQ=HD720"

  },
  {
    "category": "commercial",
    "artist": "Stephen Savage",
    "title": "Where's Walrus?",
    "modalId": 19,
    "img": "wheres_walrus.png",
    "link": "https://www.youtube.com/embed/2dZSGen9cG0?rel=0?VQ=HD720"

  },
  {
    "category": "commercial",
    "artist": "Robert Sabuda",
    "title": "The White House",
    "modalId": 20,
    "img": "white_house.png",
    "link": "https://www.youtube.com/embed/NFFdTmEoe58?rel=0?VQ=HD720"

  },
  {
    "category": "commercial",
    "artist": "Suzanne Collins",
    "title": "Year of the Jungle",
    "modalId": 21,
    "img": "year_of_jungle.png",
    "link": "https://www.youtube.com/embed/h5Od3fP1oCc?rel=0?VQ=HD720"

  },
  {
    "category": "commercial",
    "artist": "Stephen Savage",
    "title": "Polar Bear Morning",
    "modalId": 22,
    "img": "polar_bear.png",
    "link": "https://www.youtube.com/embed/uMZCXBiKrpU?rel=0?VQ=HD720"

  },
  {
    "category": "commercial",
    "artist": "Sharon Robinson",
    "title": "Under The Same Sun",
    "modalId": 23,
    "img": "under_sun.png",
    "link": "https://www.youtube.com/embed/DPj_lNoM8vI?rel=0?VQ=HD720"
  },
  {
    "category": "commercial",
    "artist": "Scholastic",
    "title": "Harry Bliss Draws Bailey",
    "modalId": 23,
    "img": "harrybliss.png",
    "link": "https://www.youtube.com/embed/P38SHbltwxY?rel=0?VQ=HD720"

  },
  {
    "category": "commercial",
    "artist": "Derek Anderson",
    "title": "Happy Birthday Hamster",
    "modalId": 24,
    "img": "birthday_hamster.png",
    "link": "https://www.youtube.com/embed/vCntellLLgo?rel=0?VQ=HD720"

  },
  {
    "category": "commercial",
    "artist": "Grow Your Own Etsy",
    "title": "Grow Your Own Etsy",
    "modalId": 25,
    "img": "etsy.png",
    "link": "https://www.youtube.com/embed/KEympfTr1pI"

  },
  {
    "category": "hire",
    "artist": "Gatesnotes",
    "title": "Editing, Animation",
    "modalId": 26,
    "img": "gates_notes.png",
    "link": "https://www.youtube.com/embed/bVzppWSIFU0?VQ=HD720"

  },
  {
    "category": "hire",
    "artist": "Microsoft - Salestography",
    "title": "Editing, Compositing",
    "modalId": 27,
    "img": "salestography.png",
    "link": "https://www.youtube.com/embed/PPk37EwYGSw?VQ=HD720"

  },
  {
    "category": "hire",
    "artist": "Fred Hutch",
    "title": "Editing",
    "modalId": 28,
    "img": "dear_cancer.png",
    "link": "https://www.youtube.com/embed/B86LBapoS_8?VQ=HD720"

  },
  {
    "category": "hire",
    "artist": "Microsoft - Data Privacy",
    "title": "Editing",
    "modalId": 29,
    "img": "microsoft_privacy.png",
    "link": "https://www.youtube.com/embed/hxNZRSuuTzg?VQ=HD720"

  },
  {
    "category": "hire",
    "artist": "Rock Island Communications",
    "title": "Motion Graphics",
    "modalId": 30,
    "img": "rock_island.png",
    "link": "https://www.youtube.com/embed/JNXxieXDmFQ?VQ=HD720"

  },
  {
    "category": "film",
    "artist": "The Condemned",
    "title": "Editor",
    "modalId": 31,
    "img": "the_condemned.png",
    "link": "https://www.youtube.com/embed/7ULZaG9O338?VQ=HD720"
  },
  {
    "category": "film",
    "artist": "48 Hours",
    "title": "Producer/Editor",
    "modalId": 32,
    "img": "perilous_journey.png",
    "link": "https://www.youtube.com/embed/uXG83ma3bCQ?VQ=HD720"
  },
  {
    "category": "film",
    "artist": "As Far As The Eye Can See",
    "title": "Director",
    "modalId": 33,
    "img": "as_far.png",
    "link": "https://player.vimeo.com/video/147205302?title=0&byline=0&portrait=0"
  },
  {
    "category": "film",
    "artist": "Anybody",
    "title": "Director",
    "modalId": 34,
    "img": "anybody.png",
    "link": "https://player.vimeo.com/video/79636907?title=0&byline=0&portrait=0"
  }]
  });