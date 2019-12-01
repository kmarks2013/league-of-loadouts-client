import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Profile } from './Profile'
import UserTile from './UserTile'

export default function UserList({users}) {
    // {console.log(users)}
    return (
        <div>
            {users.map(user => {
                <UserTile user={user} />
            )}
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    users = state.user.users
})

const mapDispatchToProps = {
    
}
export default connect(mapStateToProps, mapDispatchToProps)(UserList)