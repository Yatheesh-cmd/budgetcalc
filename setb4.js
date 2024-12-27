class BloodBank {
    constructor() {
      this.donorMap = new Map();
    }
  
    displayDonors() {
      if (this.donorMap.size === 0) {
        console.log("No donors available.");
      } else {
        console.log("List of donors:");
        this.donorMap.forEach((details, name) => {
          console.log(`Name: ${name}, Blood Group: ${details.bloodGroup}, Age: ${details.age}, Recently Donated: ${details.recentlyDonated}`);
        });
      }
    }
  
    addVolunteer(name, bloodGroup, age, recentlyDonated) {
      if (this.donorMap.has(name)) {
        console.log(`Donor ${name} is already in the system.`);
      } else {
        this.donorMap.set(name, { bloodGroup, age, recentlyDonated });
        // console.log(`Donor ${name} added successfully.`);
      }
    }
  }
  const bloodBank = new BloodBank();
  bloodBank.addVolunteer("ram", "A+", 25, true);
  bloodBank.addVolunteer("alice", "O-", 30, false);
  bloodBank.displayDonors();
  bloodBank.addVolunteer("pranav", "A+", 25, true);
  bloodBank.addVolunteer("pavi", "O+", 26, true);
  bloodBank.displayDonors();
  

  