export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle',
  color: 'red' | 'green' | 'blue',
  getArea(): number;
}

export class Triangle implements Figure {
  shape: "triangle" = "triangle";

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    const ab = a + b;
    const bc = b + c;
    const ac = a + c;

    if( a <= 0 || b <= 0 || c <= 0 ) {
      throw new Error('any length is <= 0');
    }

    if(a >= bc || b >= ac || c >= ab) {
      throw new Error('the longest side of a triangle is >= than a sum of two others');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: "circle" = "circle";

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    if(radius <= 0) {
      throw new Error('radius <= 0');
    }
   }

   getArea():number{
    const area = Math.PI * Math.pow(this.radius, 2);

    return Math.floor(area * 100) / 100;
   }
}

export class Rectangle implements Figure {
  shape: "rectangle" = "rectangle";

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    if(width <= 0 || height <= 0) {
      throw new Error('any length is <= 0');
    }
  }

  getArea():number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
