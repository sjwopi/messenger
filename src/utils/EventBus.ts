export class EventBus {
  private readonly listeners: Record<string, Array<() => void>> = {};

  on(event: string, callback: () => void) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: string, callback: () => void) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter(
      listener => listener !== callback
    );
  }

  emit(event: string, ...args: (()=>void)[]) {
    if (!this.listeners[event]) {
      return;
    }
    this.listeners[event].forEach((listener: any) => {
      listener(...args);
    });
  }
}

export default EventBus;
