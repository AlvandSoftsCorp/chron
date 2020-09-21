let n = arr_events.length;
for (let i = 0; i < n; i++) {
    let event = arr_events[i];
    if (event.id == ev.id) continue;
    if (event.left == 0) continue;
    if (has_overlap(event, ev)) {
        for(let j=0;j<n;j++)
        {
            if(has_overlap(arr_events[j], ev))
            {
                ev.top += 100;
                ev.bottom += 100;
            }
        }
    }
}
