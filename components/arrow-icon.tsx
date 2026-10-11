export default function ArrowIcon({direction = 'diagonal'}: {direction?: 'diagonal' | 'down' | 'right'}) {
 const paths = {diagonal: 'M5 19 19 5M5 5h14v14', down: 'M12 4v16m-7-7 7 7 7-7', right: 'M4 12h16m-7-7 7 7-7 7'};
 return <svg className="arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d={paths[direction]}/></svg>;
}
