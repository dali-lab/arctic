function drawCurve(start, end, interval){
	var start_x = start[0];
	var start_y = start[1];
	var end_x = end[0];
	var end_y = end[1];
	var mid_x = Math.min(start_x, end_x) + (Math.max(start_x, end_x) - Math.min(start_x, end_x))/2;
	var mid_y = Math.min(start_y, end_y) + (Math.max(start_y, end_y) - Math.min(start_y, end_y))/2;
	//return [mid_x,mid_y]
	// steps = 0;
	var radius = Math.sqrt(Math.pow(start_x - end_x) + Math.pow(start_y - end_y));
	var x = radius;
	var y = 0;
	var d = 5.0/(4-r);
	points = [];
	while (x >= y){
		points.push([x + start_x, y + start_y]);
		points.push([x + start_x, start_y - y]);
		points.push([y + start_x, x + start_y]);
		points.push([y + start_x, start_y - x]);
		points.push([start_x - x, y + start_y]);
		points.push([start_x - x, start_y - y]);
		points.push([start_x - y, x + start_y]);
		points.push([start_x - y, start_y - x]);
		if d<0{
			d = d + 2 * y + 3;
		}else{
			d = d + 2 * (y - x) + 5;
			y = y - 1;
		}

		x = x + 1;
	}
	points.push(start);
	points.push(end);
	return points;
}


int x = radius, y = 0;
  int radiusError = 1-x;
 
  while(x >= y)
  {
    DrawPixel(x + x0, y + y0);
    DrawPixel(y + x0, x + y0);
    DrawPixel(-x + x0, y + y0);
    DrawPixel(-y + x0, x + y0);
    DrawPixel(-x + x0, -y + y0);
    DrawPixel(-y + x0, -x + y0);
    DrawPixel(x + x0, -y + y0);
    DrawPixel(y + x0, -x + y0);
 
    y++;
        if(radiusError<0)
                radiusError+=2*y+1;
        else
        {
                x--;
                radiusError+=2*(y-x+1);
        }
  }