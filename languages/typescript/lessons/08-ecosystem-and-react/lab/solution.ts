/**
 * LAB 08 SOLUTION
 */

interface Task {
    id: number;
    text: string;
    isDone: boolean;
}

// 1. Props
interface TaskItemProps {
    task: Task;
    onToggle: (id: number) => void;
}


// 2. Hooks (Pseudo-code)
// const [tasks, setTasks] = useState<Task[]>([]);


// 3. Events (Pseudo-code)
// const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//    const value = e.target.value;
// }

export {};
