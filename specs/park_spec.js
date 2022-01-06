const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  let dinosaur;
  let dinosaur2;

  beforeEach(function () {
    park = new Park("Jurassic Park",20) 
    dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur("triceratops","herbivore",30)
    dinosaur3 =new Dinosaur("triceratops","herbivore",60)
  })

  it('should have a name',function(){
    const actual = park.name
    assert.strictEqual(actual,"Jurassic Park")
  });

  it('should have a ticket price',function(){
    const actual = park.ticketPrice
  });

  it('should have a collection of dinosaurs',function(){
    const actual = park.dinosaurs
    assert.deepStrictEqual(actual,[])
  });

  it('should be able to add a dinosaur to its collection',function(){
    park.addDinosaur(dinosaur)
    const actual = park.dinosaurs.length
  
    assert.deepStrictEqual(actual,1)
  });

  it('should be able to remove a dinosaur from its collection',function(){
    park.addDinosaur(dinosaur)
    park.addDinosaur(dinosaur2)
    park.removeDinosaur(dinosaur)
    const actual = park.dinosaurs.length
    assert.deepStrictEqual(actual,1)
  });

  it('should be able to find the dinosaur that attracts the most visitors',function(){
    park.addDinosaur(dinosaur)
    park.addDinosaur(dinosaur2)
    const actual = park.mostCustomers(park.dinosaurs)
    assert.strictEqual(actual,dinosaur)
 

  });

  it('should be able to find all dinosaurs of a particular species',function(){
    park.addDinosaur(dinosaur)
    park.addDinosaur(dinosaur2)
    const actual = park.findDinosaurBySpecies("triceratops")
    assert.deepStrictEqual(actual[0],dinosaur2)
  });

  it('should be able to calculate the total number of visitors per day',function(){
    park.addDinosaur(dinosaur)
    park.addDinosaur(dinosaur2)
    const actual = park.totalDailyGuests()
    assert.strictEqual(actual,80)
  });

  it('should be able to calculate the total number of visitors per year',function(){
    park.addDinosaur(dinosaur)
    park.addDinosaur(dinosaur2)
    const actual = park.totalYearlyVisitors()
    
    assert.strictEqual(actual,29200)
  });

  it('should be able to calculate total revenue for one year',function(){
    park.addDinosaur(dinosaur)
    park.addDinosaur(dinosaur2)
    const actual = park.totalRevenue()
    assert.strictEqual(actual,584000)
  });

  it('should be able to remove dinosaurs that all have the same species',function(){
    park.addDinosaur(dinosaur)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)

    const actual = park.removeBySpecies("triceratops")
    
    assert.strictEqual(actual.length,1)
    assert.deepStrictEqual(actual[0],dinosaur)
    
  })
  it('should be able to create object',function(){
    park.addDinosaur(dinosaur)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    const actual = park.objectNumDinosaurByDiet()
    
    assert.deepStrictEqual(actual,{carnivore:1,herbivore:2})



  })
});
