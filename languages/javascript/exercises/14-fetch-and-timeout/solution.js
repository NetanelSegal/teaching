const fetchTodo = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data.title);
    } catch (error) {
        console.error('Fetch error:', error);
    }
};

fetchTodo();
