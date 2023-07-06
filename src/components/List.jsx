/* eslint react/prop-types: 0 */
const Employee = ({ name, role }) => {
    return (
        <article>
            <h2>first {name}</h2>
            <p>{role ? role : 'no role'}</p>
        </article>
    );
};

export default Employee;
