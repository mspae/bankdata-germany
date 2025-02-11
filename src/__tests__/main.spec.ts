/**
 * bankdata-germany
 * Copyright (C) 2022-2023 Markus Baumer <markus@baumer.dev>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.

 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.

 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import * as main from "../main";

/* eslint-disable @typescript-eslint/no-unsafe-call */
describe("main", () => {
  it("exports function named bankDataByBBAN", () => {
    expect(typeof main.bankDataByBBAN).toBe("function");
  });
  it("exports function named bankDataByBLZ", () => {
    expect(typeof main.bankDataByBLZ).toBe("function");
  });
  it("exports function named bankDataByIBAN", () => {
    expect(typeof main.bankDataByIBAN).toBe("function");
  });
  it("exports function named isValidBIC", () => {
    expect(typeof main.isValidBIC).toBe("function");
  });
});
