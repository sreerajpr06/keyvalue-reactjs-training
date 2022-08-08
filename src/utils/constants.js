export const labels = {
    name: 'Employee Name',
    id: 'Employee ID',
    departmentId: 'Department ID',
    username: 'Username',
    password: 'Password',
    joinDate: 'Joining Date',
    role: 'Role',
    status: 'Status',
    experience: 'Experience',
    line1: 'Address Line 1',
    line2: 'Address Line 2',
    city: 'City',
    state: 'State',
    country: 'Country',
    pin: 'Pin',
    action: 'Action',
}

export const options = {
    role: [
        {
            field: 'admin',
            value: 'Admin'
        },
        {
            field: 'developer',
            value: 'Developer'
        },
        {
            field: 'engineer',
            value: 'Engineer'
        },
        {
            field: 'manager',
            value: 'Manager'
        },
    ],
    status: [
        {
            field: 'active',
            value: 'Active'
        },
        {
            field: 'inactive',
            value: 'Inactive'
        },{
            field: 'probation',
            value: 'Probation'
        },
    ]
}

export const empListFields = [
    'name', 'id', 'joinDate', 'role', 'status', 'experience', 'action'
]