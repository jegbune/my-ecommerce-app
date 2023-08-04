import React from 'react'

function Menu() {
    let authentication = true;
    function renderApp(){
        return <p>Welcome</p>
    }
    
    function renderLogin(){
        return <p>Login</p>
    }

     return (
        <div>
            {/* {authentication ? renderApp() : renderLogin()} */}

        </div>
        // {
        //     if (status){
        //     `<p>Welcome!</p>`
        // }
        // else if (!status){
        //     `<p>Login</p>`
        // }
    // }
     )

    //        const Vehicle= {
    //            brand: 'Toyota',
    //            Model: 'Prado',
    //            type: 'SUV',
    //            year: 2021,
    //            color: 'red',
    //            registration: {
    //                city: 'Oshodi',
    //                state: 'Lagos',
    //                country: 'Nigeria'
    //        } 
    //     }

    //     vehicleOne(Vehicle)

    //     function vehicleOne ({brand,Model,type,registration: { state }}) {
    //         return <p> I have a {brand +' '+ Model +' '+ type}. I bought in {state} </p>
    //     }
    //     return (
    //         <div>
    //         {vehicleOne(Vehicle)}            
    //     </div>
    // )
}
export default Menu

