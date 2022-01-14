export function dragToPosition(target: { x: number, y: number }, d: { fx?: number, fy?: number }) {
    const x = target.x;
    const y = target.y;

    console.log(d, target)

    d.fx = x;
    d.fy = y;
}