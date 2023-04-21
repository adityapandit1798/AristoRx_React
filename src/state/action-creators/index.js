import faker from 'faker';

export const login = () =>{
    const userObj = {
        name: faker.name.findName(),
        age: faker.random.number({ min: 18, max: 80 }),
        address: {
          street: faker.address.streetAddress(),
          city: faker.address.city(),
          state: faker.address.state(),
          zipCode: faker.address.zipCode(),
        },
        medications: [],
      }
    const medicationCount = faker.random.number({ min: 1, max: 10 });
      for (let i = 0; i < medicationCount; i++) {
        const medication = {
          name: faker.random.word(),
          dosage: faker.random.number({ min: 1, max: 5 }) + 'mg',
          frequency: faker.random.number({ min: 1, max: 4 }) + ' times a day',
        };
        userObj.medications.push(medication);
      }
      return (dispatch)=>{
        dispatch({
            type:'login',
        })
    }
    }


export const logout = () =>{
   return (dispatch)=>{
    dispatch({
        type:'logout',
    })
   } 
}

/*  
export const funcn1 = (amount) =>{
 return (dispatch) =>{
    console.log('fun1');
    dispatch({
        type: 'type1',
        payload:amount
    })
 }
}

export const funcn2 = (amount) =>{
    console.log('fun2');
    return (dispatch) =>{
        dispatch({
            type: 'type2',
            payload:amount
        })
     }
}  */