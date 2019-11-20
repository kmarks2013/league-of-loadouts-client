import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Profile } from './Profile'

export default function UserList({users}) {
    return (
        <div>
            {users.map(user => {
                <Profile user={user} />
            })}
        </div>
    )
}

const mapStateToProps = (state) => ({
    users = state.user.users
})

const mapDispatchToProps = {
    
}
export default connect(mapStateToProps, mapDispatchToProps)(UserList)