const people = [{ "id": 1, "first_name": "Rolph", "last_name": "Yashin", "education": "High School", "age": 20 },
{ "id": 2, "first_name": "Winthrop", "last_name": "Reppaport", "education": "College", "age": 32 },
{ "id": 3, "first_name": "Kylen", "last_name": "Petrollo", "education": "Vocational School", "age": 40 },
{ "id": 4, "first_name": "Moore", "last_name": "Irnis", "education": "College", "age": 35 },
{ "id": 5, "first_name": "Ahmed", "last_name": "Kaesmakers", "education": "High School", "age": 34 },
{ "id": 6, "first_name": "Ranice", "last_name": "Corriea", "education": "Vocational School", "age": 27 },
{ "id": 7, "first_name": "Jarrid", "last_name": "Logue", "education": "High School", "age": 24 },
{ "id": 8, "first_name": "Bert", "last_name": "Blockey", "education": "College", "age": 27 },
{ "id": 9, "first_name": "Miriam", "last_name": "McGowran", "education": "High School", "age": 35 },
{ "id": 10, "first_name": "Jocelin", "last_name": "Vanelli", "education": "College", "age": 40 },
{ "id": 11, "first_name": "Johan", "last_name": "Tuther", "education": "Vocational School", "age": 20 },
{ "id": 12, "first_name": "Rhea", "last_name": "Harniman", "education": "High School", "age": 32 },
{ "id": 13, "first_name": "Wendell", "last_name": "Cleynaert", "education": "High School", "age": 41 },
{ "id": 14, "first_name": "Merilyn", "last_name": "Gulliver", "education": "College", "age": 27 },
{ "id": 15, "first_name": "Welsh", "last_name": "Pennick", "education": "Vocational School", "age": 22 },
{ "id": 16, "first_name": "Urson", "last_name": "Ryott", "education": "High School", "age": 25 },
{ "id": 17, "first_name": "Robinson", "last_name": "Stickins", "education": "Vocational School", "age": 40 },
{ "id": 18, "first_name": "Korey", "last_name": "Lozano", "education": "College", "age": 33 },
{ "id": 19, "first_name": "Marla", "last_name": "Bore", "education": "Vocational School", "age": 41 },
{ "id": 20, "first_name": "Chiquia", "last_name": "MacMearty", "education": "High School", "age": 38 },
{ "id": 21, "first_name": "Bili", "last_name": "Fealey", "education": "College", "age": 27 },
{ "id": 22, "first_name": "Suzanna", "last_name": "Twiddle", "education": "High School", "age": 33 },
{ "id": 23, "first_name": "Barron", "last_name": "Eixenberger", "education": "Vocational School", "age": 30 },
{ "id": 24, "first_name": "Kearney", "last_name": "Beaven", "education": "College", "age": 30 },
{ "id": 25, "first_name": "Elmer", "last_name": "Camblin", "education": "College", "age": 28 },
{ "id": 26, "first_name": "Benito", "last_name": "Hallahan", "education": "Vocational School", "age": 32 },
{ "id": 27, "first_name": "Sollie", "last_name": "Dodridge", "education": "College", "age": 18 },
{ "id": 28, "first_name": "Flori", "last_name": "Heffy", "education": "Vocational School", "age": 37 },
{ "id": 29, "first_name": "Lois", "last_name": "Brookzie", "education": "Vocational School", "age": 32 },
{ "id": 30, "first_name": "Alverta", "last_name": "Stubs", "education": "High School", "age": 34 },
{ "id": 31, "first_name": "Tallulah", "last_name": "Rittmeier", "education": "High School", "age": 18 },
{ "id": 32, "first_name": "Shae", "last_name": "Tax", "education": "Vocational School", "age": 33 },
{ "id": 33, "first_name": "Grange", "last_name": "Piercy", "education": "Vocational School", "age": 19 },
{ "id": 34, "first_name": "Josefina", "last_name": "Harrowell", "education": "Vocational School", "age": 29 },
{ "id": 35, "first_name": "Nalani", "last_name": "Fearnyough", "education": "High School", "age": 42 },
{ "id": 36, "first_name": "Mahmoud", "last_name": "Mapplethorpe", "education": "College", "age": 19 },
{ "id": 37, "first_name": "Casey", "last_name": "Kellick", "education": "Vocational School", "age": 23 },
{ "id": 38, "first_name": "Garey", "last_name": "Coughtrey", "education": "Vocational School", "age": 21 },
{ "id": 39, "first_name": "Cassie", "last_name": "Fidelli", "education": "Vocational School", "age": 37 },
{ "id": 40, "first_name": "Alfi", "last_name": "Henken", "education": "High School", "age": 35 },
{ "id": 41, "first_name": "Deeyn", "last_name": "Landsbury", "education": "College", "age": 24 },
{ "id": 42, "first_name": "Emmaline", "last_name": "Sheldrick", "education": "Vocational School", "age": 21 },
{ "id": 43, "first_name": "Elayne", "last_name": "Cambden", "education": "Vocational School", "age": 26 },
{ "id": 44, "first_name": "Chip", "last_name": "Sprade", "education": "College", "age": 33 },
{ "id": 45, "first_name": "Alyssa", "last_name": "Stoney", "education": "College", "age": 31 },
{ "id": 46, "first_name": "Paten", "last_name": "Queyos", "education": "College", "age": 42 },
{ "id": 47, "first_name": "Jori", "last_name": "Zavattero", "education": "High School", "age": 27 },
{ "id": 48, "first_name": "Jo", "last_name": "Necrews", "education": "College", "age": 30 },
{ "id": 49, "first_name": "Webb", "last_name": "Boutellier", "education": "College", "age": 36 },
{ "id": 50, "first_name": "Gauthier", "last_name": "Berthouloume", "education": "Vocational School", "age": 35 },
{ "id": 51, "first_name": "Vale", "last_name": "Aizikovich", "education": "High School", "age": 22 },
{ "id": 52, "first_name": "Tucker", "last_name": "Ixer", "education": "High School", "age": 18 },
{ "id": 53, "first_name": "Hirsch", "last_name": "Porter", "education": "Vocational School", "age": 37 },
{ "id": 54, "first_name": "Fairfax", "last_name": "Edwards", "education": "College", "age": 37 },
{ "id": 55, "first_name": "Rex", "last_name": "Cudiff", "education": "Vocational School", "age": 37 },
{ "id": 56, "first_name": "Archer", "last_name": "MacElholm", "education": "High School", "age": 35 },
{ "id": 57, "first_name": "Keane", "last_name": "Gollard", "education": "Vocational School", "age": 27 },
{ "id": 58, "first_name": "Court", "last_name": "Oxterby", "education": "High School", "age": 39 },
{ "id": 59, "first_name": "Anet", "last_name": "Lescop", "education": "College", "age": 37 },
{ "id": 60, "first_name": "Carolina", "last_name": "Halsall", "education": "College", "age": 35 },
{ "id": 61, "first_name": "Francene", "last_name": "Bumby", "education": "High School", "age": 38 },
{ "id": 62, "first_name": "Bridgette", "last_name": "Bellwood", "education": "College", "age": 33 },
{ "id": 63, "first_name": "Bernette", "last_name": "Blackater", "education": "College", "age": 24 },
{ "id": 64, "first_name": "Corrina", "last_name": "Summerrell", "education": "High School", "age": 19 },
{ "id": 65, "first_name": "Winslow", "last_name": "Bendon", "education": "High School", "age": 42 },
{ "id": 66, "first_name": "Goldina", "last_name": "Steanson", "education": "Vocational School", "age": 18 },
{ "id": 67, "first_name": "Kenn", "last_name": "Newing", "education": "Vocational School", "age": 20 },
{ "id": 68, "first_name": "Eulalie", "last_name": "Nyssen", "education": "College", "age": 18 },
{ "id": 69, "first_name": "Cindy", "last_name": "Balham", "education": "College", "age": 23 },
{ "id": 70, "first_name": "Kevin", "last_name": "Elstow", "education": "Vocational School", "age": 38 },
{ "id": 71, "first_name": "Hayden", "last_name": "Poletto", "education": "Vocational School", "age": 23 },
{ "id": 72, "first_name": "Blaine", "last_name": "Savory", "education": "Vocational School", "age": 42 },
{ "id": 73, "first_name": "Janean", "last_name": "Cauldwell", "education": "Vocational School", "age": 40 },
{ "id": 74, "first_name": "Penelopa", "last_name": "Smitham", "education": "College", "age": 42 },
{ "id": 75, "first_name": "Loella", "last_name": "Elnaugh", "education": "High School", "age": 20 },
{ "id": 76, "first_name": "Melina", "last_name": "Bento", "education": "College", "age": 35 },
{ "id": 77, "first_name": "Tully", "last_name": "Pittendreigh", "education": "College", "age": 21 },
{ "id": 78, "first_name": "Mohammed", "last_name": "Whodcoat", "education": "High School", "age": 27 },
{ "id": 79, "first_name": "Shaughn", "last_name": "Kerley", "education": "College", "age": 38 },
{ "id": 80, "first_name": "Katerine", "last_name": "Hemshall", "education": "High School", "age": 42 },
{ "id": 81, "first_name": "Pru", "last_name": "Clemanceau", "education": "High School", "age": 19 },
{ "id": 82, "first_name": "Rob", "last_name": "Spores", "education": "High School", "age": 41 },
{ "id": 83, "first_name": "Drusilla", "last_name": "Cushe", "education": "High School", "age": 40 },
{ "id": 84, "first_name": "Dorie", "last_name": "Carlson", "education": "Vocational School", "age": 31 },
{ "id": 85, "first_name": "Jerrilee", "last_name": "Bristoe", "education": "Vocational School", "age": 18 },
{ "id": 86, "first_name": "Hobey", "last_name": "Igoe", "education": "High School", "age": 34 },
{ "id": 87, "first_name": "Hilary", "last_name": "Jenkins", "education": "Vocational School", "age": 21 },
{ "id": 88, "first_name": "Lucie", "last_name": "Benoiton", "education": "High School", "age": 19 },
{ "id": 89, "first_name": "Shawn", "last_name": "Guidoni", "education": "Vocational School", "age": 26 },
{ "id": 90, "first_name": "Tracey", "last_name": "Toma", "education": "High School", "age": 27 },
{ "id": 91, "first_name": "Livvie", "last_name": "Leguey", "education": "High School", "age": 39 },
{ "id": 92, "first_name": "Barret", "last_name": "Keep", "education": "Vocational School", "age": 33 },
{ "id": 93, "first_name": "Any", "last_name": "Shallcrass", "education": "High School", "age": 25 },
{ "id": 94, "first_name": "Nealson", "last_name": "Kenwin", "education": "High School", "age": 24 },
{ "id": 95, "first_name": "Haslett", "last_name": "Comelli", "education": "High School", "age": 19 },
{ "id": 96, "first_name": "Alon", "last_name": "Benyon", "education": "Vocational School", "age": 31 },
{ "id": 97, "first_name": "Sherm", "last_name": "Burdell", "education": "College", "age": 20 },
{ "id": 98, "first_name": "Gerrie", "last_name": "Orrin", "education": "High School", "age": 39 },
{ "id": 99, "first_name": "Jeanna", "last_name": "Giacobini", "education": "High School", "age": 41 },
{ "id": 100, "first_name": "Dudley", "last_name": "Rumsby", "education": "High School", "age": 21 },
{ "id": 101, "first_name": "Dwayne", "last_name": "Hindenburg", "education": "Vocational School", "age": 25 },
{ "id": 102, "first_name": "Kile", "last_name": "Bywaters", "education": "Vocational School", "age": 29 },
{ "id": 103, "first_name": "Goraud", "last_name": "Runcie", "education": "Vocational School", "age": 39 },
{ "id": 104, "first_name": "Maitilde", "last_name": "Jakov", "education": "High School", "age": 32 },
{ "id": 105, "first_name": "Caprice", "last_name": "Vispo", "education": "High School", "age": 31 },
{ "id": 106, "first_name": "Arnaldo", "last_name": "O'Connell", "education": "High School", "age": 24 },
{ "id": 107, "first_name": "Loretta", "last_name": "Woodrough", "education": "Vocational School", "age": 34 },
{ "id": 108, "first_name": "Denis", "last_name": "Bubeer", "education": "High School", "age": 18 },
{ "id": 109, "first_name": "Kory", "last_name": "Conlon", "education": "Vocational School", "age": 25 },
{ "id": 110, "first_name": "Hayden", "last_name": "Codeman", "education": "High School", "age": 23 },
{ "id": 111, "first_name": "Shaina", "last_name": "Burr", "education": "High School", "age": 30 },
{ "id": 112, "first_name": "Griswold", "last_name": "Mulligan", "education": "College", "age": 18 },
{ "id": 113, "first_name": "Torrey", "last_name": "Corradini", "education": "Vocational School", "age": 22 },
{ "id": 114, "first_name": "Eziechiele", "last_name": "Commuzzo", "education": "Vocational School", "age": 37 },
{ "id": 115, "first_name": "Merrill", "last_name": "Parsonage", "education": "Vocational School", "age": 24 },
{ "id": 116, "first_name": "Gannie", "last_name": "Peile", "education": "High School", "age": 32 },
{ "id": 117, "first_name": "Sterne", "last_name": "Birdsall", "education": "Vocational School", "age": 18 },
{ "id": 118, "first_name": "Adan", "last_name": "Pashen", "education": "College", "age": 37 },
{ "id": 119, "first_name": "Imogen", "last_name": "Askew", "education": "College", "age": 26 },
{ "id": 120, "first_name": "Tobe", "last_name": "Blann", "education": "Vocational School", "age": 25 },
{ "id": 121, "first_name": "Sharyl", "last_name": "Tett", "education": "Vocational School", "age": 34 },
{ "id": 122, "first_name": "Holli", "last_name": "Dumphry", "education": "College", "age": 22 },
{ "id": 123, "first_name": "Lydon", "last_name": "Held", "education": "High School", "age": 28 },
{ "id": 124, "first_name": "Manfred", "last_name": "Dyerson", "education": "Vocational School", "age": 23 },
{ "id": 125, "first_name": "Antonio", "last_name": "Carwithan", "education": "Vocational School", "age": 25 },
{ "id": 126, "first_name": "Lyda", "last_name": "Brammar", "education": "Vocational School", "age": 18 },
{ "id": 127, "first_name": "Ina", "last_name": "Soaper", "education": "College", "age": 35 },
{ "id": 128, "first_name": "Ashli", "last_name": "MacDonald", "education": "High School", "age": 28 },
{ "id": 129, "first_name": "Vanni", "last_name": "Chrystie", "education": "College", "age": 36 },
{ "id": 130, "first_name": "Lindsay", "last_name": "Aphale", "education": "High School", "age": 18 },
{ "id": 131, "first_name": "Gordon", "last_name": "Klisch", "education": "High School", "age": 41 },
{ "id": 132, "first_name": "Toddy", "last_name": "Gallandre", "education": "High School", "age": 32 },
{ "id": 133, "first_name": "Patin", "last_name": "Deuss", "education": "Vocational School", "age": 35 },
{ "id": 134, "first_name": "Tanitansy", "last_name": "Codron", "education": "Vocational School", "age": 25 },
{ "id": 135, "first_name": "Willy", "last_name": "Dreger", "education": "Vocational School", "age": 34 },
{ "id": 136, "first_name": "Georgine", "last_name": "Ellesmere", "education": "College", "age": 40 },
{ "id": 137, "first_name": "Delinda", "last_name": "Van den Oord", "education": "College", "age": 29 },
{ "id": 138, "first_name": "Eddi", "last_name": "Benzing", "education": "High School", "age": 20 },
{ "id": 139, "first_name": "Corina", "last_name": "Zmitrichenko", "education": "Vocational School", "age": 20 },
{ "id": 140, "first_name": "Heinrick", "last_name": "Jagoe", "education": "Vocational School", "age": 28 },
{ "id": 141, "first_name": "Carissa", "last_name": "Landells", "education": "Vocational School", "age": 19 },
{ "id": 142, "first_name": "Chris", "last_name": "Pollie", "education": "High School", "age": 28 },
{ "id": 143, "first_name": "Lloyd", "last_name": "Treend", "education": "Vocational School", "age": 39 },
{ "id": 144, "first_name": "Pip", "last_name": "Manders", "education": "Vocational School", "age": 40 },
{ "id": 145, "first_name": "Breanne", "last_name": "Vreede", "education": "High School", "age": 33 },
{ "id": 146, "first_name": "Janifer", "last_name": "Watton", "education": "Vocational School", "age": 34 },
{ "id": 147, "first_name": "Toddy", "last_name": "Sannes", "education": "Vocational School", "age": 21 },
{ "id": 148, "first_name": "Troy", "last_name": "Sigsworth", "education": "College", "age": 25 },
{ "id": 149, "first_name": "Michel", "last_name": "Maciak", "education": "College", "age": 27 },
{ "id": 150, "first_name": "Goldina", "last_name": "Winspire", "education": "Vocational School", "age": 21 },
{ "id": 151, "first_name": "Denise", "last_name": "Persence", "education": "High School", "age": 28 },
{ "id": 152, "first_name": "Felicle", "last_name": "Jinda", "education": "High School", "age": 37 },
{ "id": 153, "first_name": "Granville", "last_name": "Epple", "education": "Vocational School", "age": 36 },
{ "id": 154, "first_name": "Darrelle", "last_name": "Halms", "education": "Vocational School", "age": 29 },
{ "id": 155, "first_name": "Doretta", "last_name": "Gosswell", "education": "High School", "age": 33 },
{ "id": 156, "first_name": "Thekla", "last_name": "Lemme", "education": "High School", "age": 34 },
{ "id": 157, "first_name": "Hyatt", "last_name": "Dorant", "education": "High School", "age": 39 },
{ "id": 158, "first_name": "Ardenia", "last_name": "Durie", "education": "High School", "age": 29 },
{ "id": 159, "first_name": "Siana", "last_name": "Draijer", "education": "High School", "age": 35 },
{ "id": 160, "first_name": "Zaccaria", "last_name": "Fruser", "education": "High School", "age": 26 },
{ "id": 161, "first_name": "Ivy", "last_name": "Nuschke", "education": "Vocational School", "age": 28 },
{ "id": 162, "first_name": "Finley", "last_name": "Fotheringham", "education": "Vocational School", "age": 21 },
{ "id": 163, "first_name": "Austin", "last_name": "Ghelarducci", "education": "High School", "age": 35 },
{ "id": 164, "first_name": "Noe", "last_name": "Seath", "education": "High School", "age": 40 },
{ "id": 165, "first_name": "Chicky", "last_name": "Giroldo", "education": "College", "age": 39 },
{ "id": 166, "first_name": "Trudy", "last_name": "Phillput", "education": "College", "age": 40 },
{ "id": 167, "first_name": "Shelley", "last_name": "Czaple", "education": "Vocational School", "age": 20 },
{ "id": 168, "first_name": "Jae", "last_name": "Winsper", "education": "High School", "age": 27 },
{ "id": 169, "first_name": "Loydie", "last_name": "MacCrosson", "education": "High School", "age": 32 },
{ "id": 170, "first_name": "Hazel", "last_name": "Schimke", "education": "Vocational School", "age": 20 },
{ "id": 171, "first_name": "Robin", "last_name": "Fibbit", "education": "Vocational School", "age": 24 },
{ "id": 172, "first_name": "Base", "last_name": "Thorley", "education": "Vocational School", "age": 37 },
{ "id": 173, "first_name": "Fara", "last_name": "Hurst", "education": "College", "age": 35 },
{ "id": 174, "first_name": "Else", "last_name": "Krates", "education": "Vocational School", "age": 34 },
{ "id": 175, "first_name": "Emmett", "last_name": "Southcombe", "education": "High School", "age": 40 },
{ "id": 176, "first_name": "Humphrey", "last_name": "Hurling", "education": "College", "age": 29 },
{ "id": 177, "first_name": "Harlene", "last_name": "Goulter", "education": "Vocational School", "age": 41 },
{ "id": 178, "first_name": "Phylys", "last_name": "Hosten", "education": "College", "age": 39 },
{ "id": 179, "first_name": "Camille", "last_name": "MacClancey", "education": "Vocational School", "age": 27 },
{ "id": 180, "first_name": "Caroljean", "last_name": "Bignold", "education": "College", "age": 33 },
{ "id": 181, "first_name": "Darrel", "last_name": "Flagg", "education": "College", "age": 28 },
{ "id": 182, "first_name": "Porty", "last_name": "Gentric", "education": "High School", "age": 38 },
{ "id": 183, "first_name": "Kelcy", "last_name": "Glackin", "education": "Vocational School", "age": 42 },
{ "id": 184, "first_name": "Tamra", "last_name": "Piddock", "education": "College", "age": 42 },
{ "id": 185, "first_name": "Veriee", "last_name": "Bagot", "education": "High School", "age": 21 },
{ "id": 186, "first_name": "Lew", "last_name": "Davall", "education": "College", "age": 42 },
{ "id": 187, "first_name": "Hendrick", "last_name": "Hartigan", "education": "College", "age": 30 },
{ "id": 188, "first_name": "Rawley", "last_name": "Mityukov", "education": "College", "age": 20 },
{ "id": 189, "first_name": "Joeann", "last_name": "Van der Son", "education": "Vocational School", "age": 23 },
{ "id": 190, "first_name": "Nicolina", "last_name": "Twelvetrees", "education": "High School", "age": 38 },
{ "id": 191, "first_name": "Lyn", "last_name": "Hallifax", "education": "High School", "age": 32 },
{ "id": 192, "first_name": "Belicia", "last_name": "Tams", "education": "College", "age": 26 },
{ "id": 193, "first_name": "Aylmar", "last_name": "Souttar", "education": "High School", "age": 36 },
{ "id": 194, "first_name": "Raffaello", "last_name": "Micah", "education": "High School", "age": 42 },
{ "id": 195, "first_name": "Hobey", "last_name": "ffrench Beytagh", "education": "High School", "age": 39 },
{ "id": 196, "first_name": "Harriett", "last_name": "Nellis", "education": "High School", "age": 42 },
{ "id": 197, "first_name": "Ingram", "last_name": "Bettaney", "education": "Vocational School", "age": 31 },
{ "id": 198, "first_name": "Tobit", "last_name": "Drought", "education": "High School", "age": 37 },
{ "id": 199, "first_name": "Craggy", "last_name": "Brett", "education": "High School", "age": 38 },
{ "id": 200, "first_name": "Barnard", "last_name": "Barford", "education": "High School", "age": 21 }]



// Write a function to sort an array of objects into four seperate arrays 
// based on if the person is above or below a certain age and if they went to college or not.


function sortPeople(people, age) {
    let underLimitCollege = [];
    let overLimitCollege = [];
    let underLimitRich = [];
    let overLimitRich = [];

    for (const person of people) {
        if (person.age >= age) {
            if (person.education === "College") {
                overLimitCollege.push(person);
                continue;
            }
            if (person.education !== "College") {
                overLimitRich.push(person);
                continue;
            }
        }

        if (person.age < age) {
            if (person.education === "College") {
                underLimitCollege.push(person);
                continue;
            }
            if (person.education !== "College") {
                underLimitRich.push(person);
                continue;
            }
        }
    }
    // Pass back the result as a short-hand object, with the keys being the names of the variables used.
    let result = { underLimitCollege, overLimitCollege, underLimitRich, overLimitRich };

    // Pass back the result as an array of the arrays that were built.
    // let result = [ underLimitCollege, overLimitCollege, underLimitRich, overLimitRich ];
    return result;
}

// Read out an object as the return and access the .length property to find out how many are in each group.
let result = sortPeople(people, 21);
console.log(result.underLimitRich.length);

// Use destructuring to get 4 unique arrays from the array that was passed back.
// let [underLimitCollege, overLimitCollege, underLimitRich, overLimitRich] = sortPeople(people, 21);