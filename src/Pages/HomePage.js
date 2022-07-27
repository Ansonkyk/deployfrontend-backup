import React from 'react'

const HomePage = ({ serverMessage, clientMessage, setClientMessage, sendReceiveMessage, userList, user }) => {
  
    return (
    <>
        <p>{clientMessage}</p>
        <p>{serverMessage}</p>
        <input type="text" onChange={(e)=> {
            const dateTime = new Date()

            setClientMessage(`Message: ${e.target.value} at time ${dateTime.toString()}`)
        }}/>
        <button onClick={()=> {
            sendReceiveMessage()
        }}>Send</button>
        <>   
            
            {userList.map((user) => {
                return (
                    <> 
                        <p>First Name:{user.firstName}</p>
                        <p>Last Name:{user.lastName}</p>
                        <p>Email:{user.email}</p>
                    </>
                )
            })}
        </>
    </>
  )
}

export default HomePage