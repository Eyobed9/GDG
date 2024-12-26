function list() 
{
    const names = ["Ermias Endale", 
        "Hermela Mulugeta",
        "Ayanew Mengesha",
        "Yarbe Mohaz",
        "Etsubdink Gashaw",
        "Yordanos"
        ]
    return (
        <ul>
            {names.map((name, index) => (
                <li key={index}>{name}</li>
            ))}
        </ul>
    );
}


