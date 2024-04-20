import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  ViewsDirective,
} from "@syncfusion/ej2-react-schedule";
import { registerLicense } from "@syncfusion/ej2-base";

registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NBaF5cXmZCe0x0RXxbf1x0ZFFMZF5bR3RPIiBoS35RckVnW39fdnBXRWNaUEd1"
);

const data = [
  {
    Id: 1,
    Subject: "Meeting",
    StartTime: new Date(2024, 3, 25, 10, 0),
    EndTime: new Date(2024, 3, 25, 12, 30),
    IsAllDay: false,
  },
  {
    Id: 2,
    Subject: "Planning",
    StartTime: new Date(2024, 3, 27, 10, 0),
    EndTime: new Date(2024, 3, 27, 12, 30),
    IsAllDay: true,
    Priority: "High",
  },
  {
    Id: 3,
    Subject: "Retrospective",
    StartTime: new Date(2024, 3, 29, 10, 0),
    EndTime: new Date(2024, 3, 29, 12, 30),
  },
];

const Calendar = () => {
  return (
    <ScheduleComponent
      height={500}
      currentView="Month"
      selectedDate={new Date(2024, 3, 25)}
      eventSettings={{ dataSource: data }}
    >
      <ViewsDirective>
        <ViewsDirective option="Day" />
        <ViewsDirective option="Week" />
        <ViewsDirective option="Month" />
        <ViewsDirective option="Agenda" />
      </ViewsDirective>
      <Inject services={[Day, Week, Month, WorkWeek, Agenda]} />
    </ScheduleComponent>
  );
};

export default Calendar;
