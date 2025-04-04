import CreateEventForm from "@/components/shared/events/create-event-form";

export default function Page() {
  console.log('dashboard loaded');
  return (
    <>
      <div className="newScreen">
        Dashboard
       <CreateEventForm />
      </div>
    </>
  );
}
