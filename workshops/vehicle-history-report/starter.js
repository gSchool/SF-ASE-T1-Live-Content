/*
 * id - unique identifier for the report.
 * vin - Id of the vehicle involved in the accident.
 * date - When the incident happened.
 * description - Short explanation of the incident.
 */
const incidents = [
  {"id":"008b972a-ddad-4c14-8784-2c38039ed109","vin":"WBSWD9C58AP682105","date":"1/14/2008","description":"While trying to escape a pretend dragon attack, my car accidentally bumped into a knight in shining armor, creating a hilarious dent on the door."},
  {"id":"27ab3a7a-2eb4-4530-954e-3be1325b611b","vin":"WBAVC53567A534039","date":"8/16/2000","description":"During a juggling performance, a wayward juggling pin accidentally dented my car's door, creating a whimsical dent in the shape of the pin."},
  {"id":"406593a3-ec1d-46dc-b0e8-847ebca79328","vin":"WBAVC53567A534039","date":"4/22/2021","description":"While superheroes battled a 'giant rubber duck invasion,' my car experienced a 'rubber duck stampede dent' amidst the waddling chaos."},
  {"id":"b4ad3871-a402-4418-8492-b2decda93467","vin":"WVGEF9BP5DD939528","date":"4/20/2013","description":"Black Widow's motorcycle stunt went awry, and she bumped into my car, leaving a 'spy-dent' on the door."},
  {"id":"77d8078f-9316-4b9c-850e-031a2aeda962","vin":"1G6DK1E33C0955175","date":"6/25/2004","description":"A superhero's 'weather-controlling experiment' caused a sudden 'rain of rubber duckies,' leading to a funny 'rubber ducky dent' on my car."},
  {"id":"2ca22de6-77ac-48a5-9689-9de29b3efc88","vin":"JN8AZ1MU6AW663444","date":"9/28/2001","description":"Aquaman's friendly sea creatures got a bit too excited, causing a 'marine life dent' when they playfully bumped into my car."},
  {"id":"c1456660-bdd8-4bea-9986-018a1f0ec8dd","vin":"1N4AB7AP4EN229378","date":"8/20/2007","description":"A giant inflatable advertising balloon landed on my car during a windy day, causing a comically deflated dent on the roof."},
  {"id":"ca2bf78d-b300-49f6-b84d-c6f9ff298dc0","vin":"JN8AS5MT5BW285282","date":"12/26/2005","description":"My car participated in an underground race with hyper-fast alien racers, causing 'light-speed friction dents' on the sides."},
  {"id":"7c8fc5ed-f7b2-4783-b0f8-8bd999895882","vin":"WBSWD9C58AP682105","date":"8/1/2001","description":"Storm's weather-controlling powers caused a sudden gust of wind that knocked my car into a 'superhero dance-off dent' with another vehicle."},
  {"id":"016b5a52-cf94-4157-b9b2-b08b58f6be12","vin":"KNAFU5A21D5197200","date":"5/30/2009","description":"During a meteor shower, my car became a 'cosmic dartboard,' resulting in meteorite dents all over the body."},
  {"id":"208b2c58-149c-434a-8479-8c8c0cba25da","vin":"JN8AZ1MU6AW663444","date":"9/12/2012","description":"As superheroes tried to redirect a 'rogue parade of giant puppets,' my car ended up in a 'puppet parade dent' with a larger-than-life float."},
  {"id":"db66b44d-2dc5-4ff5-bfbd-84c196c71302","vin":"WBSWD9C58AP682105","date":"7/10/2007","description":"My car experienced a 'teleportation malfunction' and ended up parked inside a solid wall, leaving an otherworldly dent."},
  {"id":"5e863ea6-bda5-4707-9126-2f503ea16aff","vin":"WBAVC53567A534039","date":"11/28/2020","description":"Mr. Fantastic's stretchy arms got tangled with my car's antenna during a heroics demonstration, leading to a comical 'stretch dent'."},
  {"id":"878fd8f1-a8ee-4929-8007-1d3bb7b262e3","vin":"2T2BK1BA9FC126026","date":"2/17/2014","description":"My car accidentally became part of a 'knightly joust' as two knights collided nearby, resulting in a medieval dent on the side."},
  {"id":"459a1c8d-2ca4-4ae7-9614-0cb5dd2da375","vin":"JN8AS5MT5BW285282","date":"6/10/2000","description":"During a Renaissance Fair feast, a roast turkey landed on my car's roof, leaving a 'roast turkey dent' as a quirky souvenir."},
  {"id":"0546428a-399d-43c4-a32a-b51b0f7bf508","vin":"WAULC68EX3A092303","date":"6/19/2000","description":"My car's GPS received signals from an extraterrestrial source, leading it on a zigzagging path and creating a 'UFO-inspired dent' in the rear."},
  {"id":"8748cf33-e56a-4446-b733-02f40043562c","vin":"WAUVC68E54A571447","date":"10/21/2010","description":"Superheroes' effort to redirect a 'giant inflatable balloon parade' caused my car to be playfully tapped by a balloon float, leaving a 'balloon bump dent.'"},
  {"id":"4d74135c-b965-4fe4-b5c3-0b06be07acb7","vin":"WBSWD9C58AP682105","date":"10/19/2005","description":"My car was mistaken for a jousting target during a Renaissance Fair, leading to a comical 'knight-in-shining-armor dent' on the side."},
  {"id":"3039a449-3769-4008-b2ca-4bef2cccfab8","vin":"1G6DK1E33C0955175","date":"8/10/2019","description":"A rogue AI car wash system interpreted my vehicle as a graffiti canvas, creating an intricate pattern of laser-etched dents."},
  {"id":"edd7890d-be09-4199-9cec-a2900627debd","vin":"SALAC2D44CA951281","date":"10/6/2005","description":"My car was mistaken for a throne by a playful royal, leading to a 'royal cushion dent' on the driver's seat."}
];