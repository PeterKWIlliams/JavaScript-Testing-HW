const Park = function(name,ticketPrice){
    this.name = name 
    this.ticketPrice = ticketPrice
    this.dinosaurs = []
}


Park.prototype.addDinosaur = function(dinosaur){
    return this.dinosaurs.push(dinosaur)
}

Park.prototype.removeDinosaur = function(dinosaur){
    let index = this.dinosaurs.indexOf(dinosaur)
    this.dinosaurs.splice(index,1)
}

Park.prototype.mostCustomers = function(){
    for(let dinosaur of this.dinosaurs){
        if(dinosaur.guestsAttractedPerDay === Math.max(dinosaur.guestsAttractedPerDay)){
            return dinosaur
            }
    }
   
}

Park.prototype.findDinosaurBySpecies = function(species){
    let listDinosaurSpecies = []
    
    for(let dinosaur of this.dinosaurs){
        if (dinosaur.species === species){
            listDinosaurSpecies.push(dinosaur)
        }
    }
   return listDinosaurSpecies
}


Park.prototype.totalDailyGuests = function(){
    let total = 0
    for(let dinosaur of this.dinosaurs){
        total += dinosaur.guestsAttractedPerDay
    }
    return total
}

Park.prototype.totalYearlyVisitors = function(){
    let yearlyVisitors = this.totalDailyGuests() * 365
    return yearlyVisitors
}

Park.prototype.totalRevenue = function(){
   return this.totalYearlyVisitors() * this.ticketPrice
}

Park.prototype.removeBySpecies = function(species){
    let speciesArray = this.findDinosaurBySpecies(species)
    
    for(let dinosaur of speciesArray){
        if (this.dinosaurs.includes(dinosaur)){
            this.removeDinosaur(dinosaur)
        }
    
    
    }
    
    return this.dinosaurs

}

Park.prototype.populateObject = function(){
    let object = {}
    for(dinosaur of this.dinosaurs){
        object[dinosaur.diet] = 0
    }
return object 
}

Park.prototype.objectNumDinosaurByDiet = function(){
    let dinosaurDietCount = this.populateObject() 
    
    for(dinosaur of this.dinosaurs){
       
        dinosaurDietCount[dinosaur.diet] += 1
     }
return dinosaurDietCount    
}



module.exports = Park;