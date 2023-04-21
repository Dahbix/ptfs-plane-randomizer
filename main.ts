controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mode += 1
    if (mode == 0) {
        scene.setBackgroundImage(assets.image`Mode Free Aircraft`)
    } else if (mode == 1) {
        scene.setBackgroundImage(assets.image`Mode All Aircraft`)
    } else {
        scene.setBackgroundImage(assets.image`Mode Free Aircraft`)
        mode = 0
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mode == 0) {
        if (Math.percentChance(50)) {
            game.splash("Random Aircraft:", text_list[randint(0, 55)])
        } else {
            game.splash("Fly the aircraft", Special[randint(0, 6)])
        }
    } else if (mode == 1) {
        if (Math.percentChance(33)) {
            game.splash("Random Aircraft:", text_list[randint(0, 55)])
        } else if (Math.percentChance(33)) {
            game.splash("Random Aircraft:", Gamepass[randint(0, 16)])
        } else {
            game.splash("Fly the aircraft", Special[randint(0, 6)])
        }
    }
})
let mode = 0
let text_list: string[] = []
let Special: string[] = []
let Gamepass: string[] = []
scene.setBackgroundImage(assets.image`Mode Free Aircraft`)
Gamepass = [
"Airbus A380",
"SR71 Blackbird",
"Bombardier Learjet",
"Santas Sled",
"Walrus",
"Blimp",
"Chinook",
"F-22 Raptor",
"F-16 Fighting Falcon",
"F-35B",
"C130 Hercules",
"Hot Air Balloon",
"Cessna 172 Amphibious",
"Cessna 182 Amphibious",
"DHC-6 Twin Otter Amphibious",
"Piper Cub Amphibious",
"Cessna Caravan Amphibious"
]
Special = [
"you first ever flew",
"you first bought",
"you hate the most",
"you find ugly",
"with the prettiest cockpit",
"thats overrated",
"that no one likes"
]
text_list = [
"Airbus A220",
"Airbus A320",
"Airbus A330",
"Airbus A340",
"Airbus A350",
"Boeing 737",
"Boeing 747",
"Boeing 757",
"Boeing 767",
"Boeing 777",
"Boeing 787",
"Concorde",
"Bombardier CRJ700",
"Bombardier Q400",
"McDonnell Douglas MD-11",
"McDonnell Douglas MD-90",
"Airbus Beluga",
"Boeing DreamLifter",
"Boeing 747 Cargo",
"Boeing 757 Cargo",
"Boeing 767 Cargo",
"Boeing 777 Cargo",
"McDonnell Douglas MD-11 Cargo",
"Bell 412",
"UH-60 Black Hawk",
"Airbus H135",
"DHC-6 Twin Otter",
"Extra 300s",
"Piper PA-28",
"Piper Cub",
"Cessna 172",
"Cessna 182",
"Cessna Caravan",
"Cessna Caravan Skydiving",
"Wright Brothers Plane",
"Sukhoi Su-27",
"F/A-18 Super Hornet",
"Hawk T1",
"Eurofighter Typhoon",
"A-10 Warthog",
"B-2 Spirit",
"F-15E Strike Eagle",
"F-14 Tomcat",
"P-51 Mustang",
"Hawker Hurricane",
"F4U Corsair",
"A6M Zero",
"Fokker Dr1",
"Mig-15",
"P38 Lightning",
"B29",
"Avro Vulcan",
"Hawker Harrier",
"F-4 Phantom",
"English Electric Lightning",
"Paratrike"
]
