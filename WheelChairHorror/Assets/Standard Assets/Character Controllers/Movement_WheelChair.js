var l_WheelSpeed = 10.0;
var r_WheelSpeed = 10.0;
var speedDiff : int;



function Update()
{
	if(Input.GetKey("q"))
		l_WheelSpeed += 0.2;
	
	else if(!Input.GetKey("q") && l_WheelSpeed > 0.0)
		l_WheelSpeed -= 0.03;	
	
	if(Input.GetKey("e"))
		r_WheelSpeed += 0.2;
	
	else if(!Input.GetKey("e") && r_WheelSpeed > 0.0)
		r_WheelSpeed -= 0.03;	
		
	if(l_WheelSpeed <= 0.1 && !Input.GetKey("q"))
		l_WheelSpeed = 0.0;
	
	if(r_WheelSpeed <= 0.1 && !Input.GetKey("e"))
		r_WheelSpeed = 0.0;
		
	speedDiff = (l_WheelSpeed - r_WheelSpeed);
	
	if(speedDiff > 0.3)
	{
		GameObject.Find("wheellarge_L").transform.Rotate(Vector3(1.0,0,0) * Time.deltaTime * (speedDiff * 50));
		GameObject.Find("wheellarge_R").transform.Rotate(Vector3(-1.0,0,0) * Time.deltaTime * (speedDiff * 50));
		transform.Rotate(Vector3.up * Time.deltaTime * (speedDiff * 50));
	}
	else if(speedDiff < -0.3)
	{
	GameObject.Find("wheellarge_L").transform.Rotate(Vector3(1.0,0,0) * Time.deltaTime * (speedDiff * 50));
	GameObject.Find("wheellarge_R").transform.Rotate(Vector3(-1.0,0,0) * Time.deltaTime * (speedDiff * 50));
		transform.Rotate(Vector3.up * Time.deltaTime * (speedDiff * 50));
	}
	else if(speedDiff == 0)
	{
	GameObject.Find("wheellarge_L").transform.Rotate(Vector3(1.0,0,0) * Time.deltaTime  * 50);
	GameObject.Find("wheellarge_R").transform.Rotate(Vector3(1.0,0,0) * Time.deltaTime  * 50);
	}
	
	if(Input.GetKey("q") && Input.GetKey("e"))
	{
		if(l_WheelSpeed >= r_WheelSpeed)
			r_WheelSpeed = l_WheelSpeed;
		
		else if(r_WheelSpeed >= l_WheelSpeed)
			l_WheelSpeed = r_WheelSpeed;
	}
}