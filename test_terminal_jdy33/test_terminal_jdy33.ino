void setup() {
  Serial.begin(115200);
}

void loop() {
  int number = 42;
  float decimal = 3.14159;
  String text = "Hello";

  Serial.print("Integer: ");
  Serial.println(number);
  delay(1000);

  Serial.print("Float: ");
  Serial.println(decimal, 4);
  delay(1000);

  Serial.print("String: ");
  Serial.println(text);
  delay(1000);
}
