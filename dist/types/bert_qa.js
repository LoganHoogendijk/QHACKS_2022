/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
import { BaseTaskLibrary } from './common';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVydF9xYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3RmanMtdGZsaXRlL3NyYy90eXBlcy9iZXJ0X3FhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQUVILE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxVQUFVLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMSBHb29nbGUgTExDLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbmltcG9ydCB7QmFzZVRhc2tMaWJyYXJ5fSBmcm9tICcuL2NvbW1vbic7XG5cbi8qKiBBIHNpbmdsZSBhbnN3ZXIuICovXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgUWFBbnN3ZXIge1xuICB0ZXh0OiBzdHJpbmc7XG4gIHBvczogUG9zO1xufVxuXG4vKiogQW5zd2VyIHBvc2l0aW9uLiAqL1xuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIFBvcyB7XG4gIHN0YXJ0OiBudW1iZXI7XG4gIGVuZDogbnVtYmVyO1xuICBsb2dpdDogbnVtYmVyO1xufVxuXG4vKiogQmVydFF1ZXN0aW9uQW5zd2VyZXIgY2xhc3MgdHlwZS4gKi9cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBCZXJ0UXVlc3Rpb25BbnN3ZXJlckNsYXNzIHtcbiAgLyoqXG4gICAqIFRoZSBmYWN0b3J5IGZ1bmN0aW9uIHRvIGNyZWF0ZSBhbiBJbWFnZUNsYXNzaWZpZXIgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwYXJhbSBtb2RlbCBUaGUgcGF0aCB0byBsb2FkIHRoZSBURkxpdGUgbW9kZWwgZnJvbSwgb3IgdGhlIG1vZGVsIGNvbnRlbnRcbiAgICogICAgIGluIG1lbW9yeS5cbiAgICovXG4gIGNyZWF0ZShtb2RlbDogc3RyaW5nfEFycmF5QnVmZmVyKTogUHJvbWlzZTxCZXJ0UXVlc3Rpb25BbnN3ZXJlcj47XG59XG5cbi8qKiBUaGUgbWFpbiBCZXJ0UXVlc3Rpb25BbnN3ZXJlciBjbGFzcyBpbnN0YW5jZS4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEJlcnRRdWVzdGlvbkFuc3dlcmVyIGV4dGVuZHMgQmFzZVRhc2tMaWJyYXJ5IHtcbiAgLyoqIEFuc3dlcnMgcXVlc3Rpb24gYmFzZWQgb24gdGhlIGNvbnRleHQuICovXG4gIGFuc3dlcihjb250ZXh0OiBzdHJpbmcsIHF1ZXN0aW9uOiBzdHJpbmcpOiBRYUFuc3dlcltdfHVuZGVmaW5lZDtcbn1cbiJdfQ==