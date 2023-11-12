import { describe, expect, it } from "vitest";

describe(toArray.name, () => {
  it("converts an empty iterable", async () => {
    expect(await toArray((async function* () {})())).toEqual([]);
  });

  it("converts an iterable with an element", async () => {
    expect(
      await toArray(
        (async function* () {
          yield 1;
        })(),
      ),
    ).toEqual([1]);
  });

  it("converts an iterable with two elements", async () => {
    expect(
      await toArray(
        (async function* () {
          yield 1;
          yield 2;
        })(),
      ),
    ).toEqual([1, 2]);
  });
});

describe(toFlatArray.name, () => {
  it("converts an empty iterable", async () => {
    expect(await toFlatArray((async function* () {})())).toEqual([]);
  });

  it("converts an iterable with an element", async () => {
    expect(
      await toFlatArray(
        (async function* () {
          yield [1];
        })(),
      ),
    ).toEqual([1]);
  });

  it("converts an iterable with two elements", async () => {
    expect(
      await toFlatArray(
        (async function* () {
          yield [1, 2];
        })(),
      ),
    ).toEqual([1, 2]);
  });

  it("converts an iterable with two elements in different chunks", async () => {
    expect(
      await toFlatArray(
        (async function* () {
          yield [1];
          yield [2];
        })(),
      ),
    ).toEqual([1, 2]);
  });
});

describe(slice.name, () => {
  it("slices an empty iterable", async () => {
    expect(await toArray(slice((async function* () {})(), 0, 0))).toEqual([]);
  });

  it("slices an iterable with an element", async () => {
    const createIterable = async function* () {
      yield 1;
    };

    expect(await toArray(slice(createIterable(), 0, 0))).toEqual([]);
    expect(await toArray(slice(createIterable(), 0, 1))).toEqual([1]);
    expect(await toArray(slice(createIterable(), 1, 1))).toEqual([]);
  });

  it("slices an iterable with two elements", async () => {
    const createIterable = async function* () {
      yield 1;
      yield 2;
    };

    expect(await toArray(slice(createIterable(), 0, 0))).toEqual([]);
    expect(await toArray(slice(createIterable(), 0, 1))).toEqual([1]);
    expect(await toArray(slice(createIterable(), 0, 2))).toEqual([1, 2]);
    expect(await toArray(slice(createIterable(), 1, 1))).toEqual([]);
    expect(await toArray(slice(createIterable(), 1, 2))).toEqual([2]);
    expect(await toArray(slice(createIterable(), 2, 2))).toEqual([]);
  });
});

describe(flatSlice.name, () => {
  it("slices an empty iterable", async () => {
    expect(await toArray(flatSlice((async function* () {})(), 0, 0))).toEqual(
      [],
    );
  });

  it("slices an iterable with an element", async () => {
    const createIterable = async function* () {
      yield [1];
    };

    expect(await toArray(flatSlice(createIterable(), 0, 0))).toEqual([]);
    expect(await toArray(flatSlice(createIterable(), 0, 1))).toEqual([[1]]);
    expect(await toArray(flatSlice(createIterable(), 1, 1))).toEqual([]);
  });

  it("slices an iterable with two elements", async () => {
    const createIterable = async function* () {
      yield [1];
      yield [2];
    };

    expect(await toArray(flatSlice(createIterable(), 0, 0))).toEqual([]);
    expect(await toArray(flatSlice(createIterable(), 0, 1))).toEqual([[1]]);
    expect(await toArray(flatSlice(createIterable(), 0, 2))).toEqual([
      [1],
      [2],
    ]);
    expect(await toArray(flatSlice(createIterable(), 1, 1))).toEqual([]);
    expect(await toArray(flatSlice(createIterable(), 1, 2))).toEqual([[2]]);
    expect(await toArray(flatSlice(createIterable(), 2, 2))).toEqual([]);
  });

  it("slices an iterable with two elements in a chunk", async () => {
    const createIterable = async function* () {
      yield [1, 2];
    };

    expect(await toArray(flatSlice(createIterable(), 0, 0))).toEqual([]);
    expect(await toArray(flatSlice(createIterable(), 0, 1))).toEqual([[1]]);
    expect(await toArray(flatSlice(createIterable(), 1, 2))).toEqual([[2]]);
  });

  it("slices an iterable within a chunk", async () => {
    const createIterable = async function* () {
      yield [1, 2, 3];
    };

    expect(await toArray(flatSlice(createIterable(), 1, 2))).toEqual([[2]]);
  });

  it("slices an iterable with four elements in two chunks", async () => {
    const createIterable = async function* () {
      yield [1, 2];
      yield [3, 4];
    };

    expect(await toArray(flatSlice(createIterable(), 0, 0))).toEqual([]);
    expect(await toArray(flatSlice(createIterable(), 0, 1))).toEqual([[1]]);
    expect(await toArray(flatSlice(createIterable(), 1, 1))).toEqual([]);
    expect(await toArray(flatSlice(createIterable(), 1, 2))).toEqual([[2]]);
    expect(await toArray(flatSlice(createIterable(), 1, 3))).toEqual([
      [2],
      [3],
    ]);
    expect(await toArray(flatSlice(createIterable(), 1, 4))).toEqual([
      [2],
      [3, 4],
    ]);
    expect(await toArray(flatSlice(createIterable(), 2, 2))).toEqual([]);
    expect(await toArray(flatSlice(createIterable(), 2, 3))).toEqual([[3]]);
    expect(await toArray(flatSlice(createIterable(), 2, 4))).toEqual([[3, 4]]);
    expect(await toArray(flatSlice(createIterable(), 3, 3))).toEqual([]);
    expect(await toArray(flatSlice(createIterable(), 3, 4))).toEqual([[4]]);
  });
});

describe(map.name, () => {
  it("maps a function to nothing", async () => {
    expect(await toArray(map((async function* () {})(), () => true))).toEqual(
      [],
    );
  });

  it("maps a function to values", async () => {
    expect(
      await toArray(
        map(
          (async function* () {
            yield 2;
            yield 3;
          })(),
          (x) => x * x,
        ),
      ),
    ).toEqual([4, 9]);
  });
});
