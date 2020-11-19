(function() {var implementors = {};
implementors["pyo3"] = [{"text":"impl AsRef&lt;PyAny&gt; for PyBaseException","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyException","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyStopAsyncIteration","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyStopIteration","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyGeneratorExit","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyArithmeticError","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyLookupError","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyAssertionError","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyAttributeError","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyBufferError","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyEOFError","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyFloatingPointError","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyOSError","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyImportError","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyModuleNotFoundError","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyIndexError","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyKeyError","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyKeyboardInterrupt","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyMemoryError","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyNameError","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyOverflowError","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyRuntimeError","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyRecursionError","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyNotImplementedError","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PySyntaxError","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyReferenceError","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PySystemError","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PySystemExit","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyTypeError","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyUnboundLocalError","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyUnicodeError","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyUnicodeDecodeError","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyUnicodeEncodeError","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyUnicodeTranslateError","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyValueError","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyZeroDivisionError","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyBlockingIOError","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyBrokenPipeError","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyChildProcessError","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyConnectionError","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyConnectionAbortedError","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyConnectionRefusedError","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyConnectionResetError","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyFileExistsError","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyFileNotFoundError","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyInterruptedError","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyIsADirectoryError","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyNotADirectoryError","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyPermissionError","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyProcessLookupError","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyTimeoutError","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyEnvironmentError","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyIOError","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for CancelledError","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for InvalidStateError","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for TimeoutError","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for IncompleteReadError","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for LimitOverrunError","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for QueueEmpty","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for QueueFull","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for herror","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for gaierror","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for timeout","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PanicException","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;PyClass&gt; AsRef&lt;PyAny&gt; for PyCell&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'p, T, U&gt; AsRef&lt;U&gt; for PyRef&lt;'p, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: PyClass + PyTypeInfo&lt;BaseType = U, BaseLayout = PyCellInner&lt;U&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: PyClass,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'p, T, U&gt; AsRef&lt;U&gt; for PyRefMut&lt;'p, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: PyClass + PyTypeInfo&lt;BaseType = U, BaseLayout = PyCellInner&lt;U&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: PyClass,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyBool","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyByteArray","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyBytes","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyComplex","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyDate","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyDateTime","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyTime","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyTzInfo","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyDelta","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyDict","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyFloat","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyCFunction","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyFunction","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyList","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyModule","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyLong","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PySequence","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PySet","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyFrozenSet","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PySlice","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyString","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyTuple","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyType","synthetic":false,"types":[]}];
implementors["regex_syntax"] = [{"text":"impl AsRef&lt;[u8]&gt; for Literal","synthetic":false,"types":[]}];
implementors["smallvec"] = [{"text":"impl&lt;A:&nbsp;Array&gt; AsRef&lt;[&lt;A as Array&gt;::Item]&gt; for SmallVec&lt;A&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()