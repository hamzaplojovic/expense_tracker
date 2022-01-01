const tasks = [
    {
        id: 1,
        text: "Doctors Apoitment",
        day: "Feb 5th at 3:30pm",
        reminder: true,
    },
    {
        id: 2,
        text: "Meeting at school",
        day: "Feb 6th at 5:10pm",
        reminder: true,
    },
    {
        id: 3,
        text: "Grocery Shopping",
        day: "Feb 7th at 10:30am",
        reminder: false,
    },
];
const Tasks = () => {
    return (
        <>
            {tasks.map((task) => {
                <h3>{task.text}</h3>;
            })}
        </>
    );
};

export default Tasks;
