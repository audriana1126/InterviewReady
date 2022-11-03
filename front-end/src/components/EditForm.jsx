

const EditForm = ({handleSubmit, handleChange, userData, val}) => {
    return (
        <form className="EditForm" onSubmit={handleSubmit}>
                    <label>
                        <span>name</span>
                        <input type="text" required name="name" placeholder="Enter person's name" onChange={handleChange} value={userData.name} />
                    </label>
                    <label>
                        <span>username</span>
                        <input type="text" required name="username" placeholder="Enter person's username" onChange={handleChange} value={userData.username} />
                    </label>
                    <label>
                        <span>email</span>
                        <input type="text" required name="title" placeholder="Enter image's email" onChange={handleChange} value={userData.email} />
                    </label>
                    <label>
                        <span>password</span>
                        <input type="text" required name="password" placeholder="Enter image's password" onChange={handleChange} value={userData.password} />
                    </label>
                    <input type="submit" value={val}/>
        </form>
    )
}

export default EditForm