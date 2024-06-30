function logMethod(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Calling method: ${propertyKey} with arguments: ${args}`);
    return originalMethod.apply(this, args);
  };

  return descriptor;
}

class Validator {
  constructor() {}
  private errorElement: HTMLElement | null = null;

  @logMethod
  createError(message: string): void {
    // Create a new error element
    this.errorElement = document.createElement('div');
    this.errorElement.classList.add('error');
    this.errorElement.textContent = message;
  }
  @logMethod
  showError(show: boolean): void {
    if (this.errorElement) {
      this.errorElement.style.display = show ? 'block' : 'none';
    }
  }
}
