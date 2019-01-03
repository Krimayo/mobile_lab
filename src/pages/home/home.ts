import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Property } from '../../interfaces/property_interface';
import { VrPage } from "../vr/vr";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  properties: any;

  constructor(public navCtrl: NavController) {
    this.properties = [];
    this.properties.push(
      new Property("../assets/imgs/pp-2.jpg", "Jenova", "Midgard", "1/1/2019", "Jl. Kuningan", "../assets/imgs/apartment-1.jpg", "../assets/imgs/vr-1.jpg", "At AQ RES, the best elements of the South Jakarta lifestyle are combined in one location, allowing residents to work and live in a vibrant, green, secure environment. These are residences designed for the ideal urban lifestyles of professionals, entrepreneurs, and those who seek a life, inspired, every day. AQ RES offers an oasis in the city, with resort-style features and spaces to walk, play, socialize, and spend precious time with friends and family a unique, elegant residential space connected to nature through garden areas, ensuring that residents lives are immersed in refreshing natural environments. Residents enjoy a number of special amenities and spaces designed to enhance their quality of life, including Zen lobby, library, multimedia space, meeting and screening room, water pavilion, elevated pods and social nooks. Health and leisure facilities include jogging track, fitness and yoga studio,tropical pool, spa and beauty salon, and childrens playground."),
      new Property("../assets/imgs/pp-1.jpg", "Sephiroth", "Shinra", "8/12/2018", "Jl. Panjang", "../assets/imgs/apartment-2.jpeg", "../assets/imgs/vr-2.jpg", "FAMILI SIGNATURE memiliki desain arsitektur kontemporer besutan arsitek internasional BENOY yang base-nya di Singapura. Proyek-proyek Benoy antara lain: Terminal 4 Changi Airport, ION Orchard di Singapura dan City Walk di Dubai. Dirancang dengan gaya New York, dengan bata merah ekspos dan kesan industrial yang kental, hal ini memberikan ciri khas yang kuat dan nuansa modern sesuai karakter eksekutif muda dan kaum millennials. Hunian ini menghadirkan konsep berbeda dari hunian bertingkat tradisional melalui pendekatan unik yang menggabungkan rancangan landed house dengan kenyamanan fasilitas apartemen serta 70% open space. Terdiri dari 24 tower dengan 5 lantai setiap towernya. 1 lantai FAMILI apartement terdiri dari 4 unit apartemen. Strength Points: 1. 70% Open Space 2. 1k Jogging Track, Indoor - Outdoor Gym, Swimming Pools & Basketball Court 3. Spacious Living 4. Strategic Location 5. Modern Living in Healthy and Smart Compound 6. Dedicated parking Lot (1:1) 7. Smart Home."),
      new Property("../assets/imgs/pp-3.jpg", "Cloud", "Louke", "3/1/2018", "Jl. Pendek", "../assets/imgs/apartment-3.jpg", "../assets/imgs/vr-3.png", "The Best Apartment that you can find in dream land. We offer great customer service which include but not all breakfast, dinner, gym center, pool, buffet, and many more! We have all kinds of room to suit your needs. Whether it's a single bed room, double, or quadruple we have it all. Contact us at 021-020-32321 to know more of our amazing apartment. we'll never dissappoint you or your family. We hope to see you in the future."),
      new Property("../assets/imgs/pp-4.jpg", "Vincent", "Meroun", "19/5/2018", "Jl. Lurus", "../assets/imgs/apartment-4.jpg", "../assets/imgs/vr-4.jpg", "Sip your coffee while watching the ferry go by on your massive wrap around deck. Or, enjoy the warmth of your fireplace inside as you admire the beauty ocean view while your dinner cooks in your brand new kitchen. This upstairs mite has one of the best views of the ocean found on Meroun. \n\nThis home is in a fantastic location wild easy access to two levels of schooling (Rock City Road Elementary & Wellington Senior Secondary), shopping, and public transportation. And we just finished an ...dye renovation including a brand new kitchen, new flooring throughout all of the main living areas and master bedroom and we've painted every nook and cranny possible\n\nThings want to Mow:\n\n1) There are 3 bedrooms, 1 full baMoom and 1 en suite 2 piece bathroom.\n2) There's a fire place, new gas fumace and g. stove.\n3) There's 2 parking spaces ay... for Ms suite. One under the cover of the carport and me directly behind it. There's also a storage shed available for use by the occupants of this suite.")
    )
  }

  to_vr(data) {
    this.navCtrl.push(VrPage, {vr : data});
  }

}
