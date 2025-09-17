import { Form, Input, TimeInput, Calendar, Button } from "@heroui/react";
import { Time, today, getLocalTimeZone } from "@internationalized/date";
import { TasksContext } from "./TasksContext";
import { useContext, useState } from "react";

export default function AddTasks() {
  const { tasks, setTasks } = useContext(TasksContext);

  // the data form
  const [title, setTitle] = useState('');
  const [time, setTime] = useState(today(getLocalTimeZone()));
  const [date, setDate] = useState(today(getLocalTimeZone()));

  function handelSubmit(e) {
    e.preventDefault();
    const newTask = {
      id: today(getLocalTimeZone()).toString() + Math.random().toString(36).substring(2, 9),
      title: title,
      time: time.toString(),
      date: date.toString(),
      done: false,
    }
    setTasks([...tasks, newTask]);
    e.target.reset();
  }

  return (
    <main className="mt-20">
      <Form onSubmit={handelSubmit}>
        <Input
          className="w-3xs"
          type="text"
          label="New Task"
          labelPlacement="inside"
          isClearable
          validate={(v) => v.length > 0}
          onChange={(v) => setTitle(v.target.value)}
          isRequired
        />
        <TimeInput
          aria-label="Time Picker"
          className="w-3xs"
          defaultValue={
            new Time(new Date().getHours(), new Date().getMinutes())
          }
          onChange={(i) => setTime(i)}
          label="Due Time"
          isRequired
        />
        <Calendar
          aria-label="Date Picker"
          showMonthAndYearPickers
          defaultValue={today(getLocalTimeZone())}
          minValue={today(getLocalTimeZone())}
          isRequired
          onChange={(d) => setDate(d)}
        />
        <Button color="primary" type="submit">
          Submit
        </Button>
        <Button type="reset" variant="flat">
          Reset
        </Button>
      </Form>
    </main>
  );
}
