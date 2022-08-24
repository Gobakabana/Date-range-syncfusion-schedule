var data = new ej.base.extend([], window.scheduleData, null, true);
var scheduleObj = new ej.schedule.Schedule({
  width: '100%',
  height: '650px',
  selectedDate: new Date(2022, 3, 26),
  views: [{ option: 'TimelineDay', interval: 7 }],
  eventSettings: {
    dataSource: data,
  },
  timeScale: {
    enable: false,
  },
});
scheduleObj.appendTo('#Schedule');
function monthDiff(d1, d2) {
  d1 = new Date(d1)
  d2 = new Date(d2)
  console.log(d1)
  var months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
}

var dateRange = new ej.calendars.DateRangePicker({
  placeholder: 'Choose Date Range',
  floatLabelType: 'Always',
  value: new Date(2022, 3, 26),
  change: function (args) {
    console.log(args);
    let t = monthDiff(args.startDate, args.endDate);
    console.log(t);
    scheduleObj.views[0].interval = args.daySpan;
    scheduleObj.selectedDate = args.startDate;
  },
});
dateRange.appendTo('#DateRangePicker');
