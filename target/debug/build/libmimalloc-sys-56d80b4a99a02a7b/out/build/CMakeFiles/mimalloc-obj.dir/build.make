# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.16

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:


#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:


# Remove some rules from gmake that .SUFFIXES does not remove.
SUFFIXES =

.SUFFIXES: .hpux_make_needs_suffix_list


# Suppress display of executed commands.
$(VERBOSE).SILENT:


# A target that is always out of date.
cmake_force:

.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /usr/bin/cmake

# The command to remove a file.
RM = /usr/bin/cmake -E remove -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /home/elgusanito/.cargo/registry/src/github.com-1ecc6299db9ec823/libmimalloc-sys-0.1.18/c_src/mimalloc

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /home/elgusanito/rust-projs/Python-Regex/target/debug/build/libmimalloc-sys-56d80b4a99a02a7b/out/build

# Include any dependencies generated for this target.
include CMakeFiles/mimalloc-obj.dir/depend.make

# Include the progress variables for this target.
include CMakeFiles/mimalloc-obj.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/mimalloc-obj.dir/flags.make

CMakeFiles/mimalloc-obj.dir/src/static.c.o: CMakeFiles/mimalloc-obj.dir/flags.make
CMakeFiles/mimalloc-obj.dir/src/static.c.o: /home/elgusanito/.cargo/registry/src/github.com-1ecc6299db9ec823/libmimalloc-sys-0.1.18/c_src/mimalloc/src/static.c
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/elgusanito/rust-projs/Python-Regex/target/debug/build/libmimalloc-sys-56d80b4a99a02a7b/out/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building C object CMakeFiles/mimalloc-obj.dir/src/static.c.o"
	/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -o CMakeFiles/mimalloc-obj.dir/src/static.c.o   -c /home/elgusanito/.cargo/registry/src/github.com-1ecc6299db9ec823/libmimalloc-sys-0.1.18/c_src/mimalloc/src/static.c

CMakeFiles/mimalloc-obj.dir/src/static.c.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing C source to CMakeFiles/mimalloc-obj.dir/src/static.c.i"
	/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -E /home/elgusanito/.cargo/registry/src/github.com-1ecc6299db9ec823/libmimalloc-sys-0.1.18/c_src/mimalloc/src/static.c > CMakeFiles/mimalloc-obj.dir/src/static.c.i

CMakeFiles/mimalloc-obj.dir/src/static.c.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling C source to assembly CMakeFiles/mimalloc-obj.dir/src/static.c.s"
	/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -S /home/elgusanito/.cargo/registry/src/github.com-1ecc6299db9ec823/libmimalloc-sys-0.1.18/c_src/mimalloc/src/static.c -o CMakeFiles/mimalloc-obj.dir/src/static.c.s

mimalloc-obj: CMakeFiles/mimalloc-obj.dir/src/static.c.o
mimalloc-obj: CMakeFiles/mimalloc-obj.dir/build.make

.PHONY : mimalloc-obj

# Rule to build all files generated by this target.
CMakeFiles/mimalloc-obj.dir/build: mimalloc-obj

.PHONY : CMakeFiles/mimalloc-obj.dir/build

CMakeFiles/mimalloc-obj.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles/mimalloc-obj.dir/cmake_clean.cmake
.PHONY : CMakeFiles/mimalloc-obj.dir/clean

CMakeFiles/mimalloc-obj.dir/depend:
	cd /home/elgusanito/rust-projs/Python-Regex/target/debug/build/libmimalloc-sys-56d80b4a99a02a7b/out/build && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /home/elgusanito/.cargo/registry/src/github.com-1ecc6299db9ec823/libmimalloc-sys-0.1.18/c_src/mimalloc /home/elgusanito/.cargo/registry/src/github.com-1ecc6299db9ec823/libmimalloc-sys-0.1.18/c_src/mimalloc /home/elgusanito/rust-projs/Python-Regex/target/debug/build/libmimalloc-sys-56d80b4a99a02a7b/out/build /home/elgusanito/rust-projs/Python-Regex/target/debug/build/libmimalloc-sys-56d80b4a99a02a7b/out/build /home/elgusanito/rust-projs/Python-Regex/target/debug/build/libmimalloc-sys-56d80b4a99a02a7b/out/build/CMakeFiles/mimalloc-obj.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : CMakeFiles/mimalloc-obj.dir/depend

