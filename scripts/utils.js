function getUnique() {
  return Date().toString().replaceAll(/\D/g, "");
}