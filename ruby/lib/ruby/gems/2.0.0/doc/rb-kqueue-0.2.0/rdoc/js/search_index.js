var search_data = {"index":{"searchIndex":["kqueue","event","native","ffi","library","flags","kevent","timespec","queue","watcher","file","process","readwrite","signal","socketreadwrite","timer","add!()","callback!()","callback!()","delete!()","disable!()","enable!()","eof?()","flags()","from_flag()","from_mask()","handle_error()","kevent!()","native()","new()","new()","new()","new()","new()","new()","new()","new()","new()","poll()","process()","read_events()","run()","stop()","to_flag()","to_mask()","watch_file()","watch_for_signal()","watch_process()","watch_socket_for_read()","watch_socket_for_write()","watch_stream_for_read()","watch_stream_for_write()","watch_timer()","watcher()","readme"],"longSearchIndex":["kqueue","kqueue::event","kqueue::native","kqueue::native::ffi","kqueue::native::ffi::library","kqueue::native::flags","kqueue::native::kevent","kqueue::native::timespec","kqueue::queue","kqueue::watcher","kqueue::watcher::file","kqueue::watcher::process","kqueue::watcher::readwrite","kqueue::watcher::signal","kqueue::watcher::socketreadwrite","kqueue::watcher::timer","kqueue::watcher#add!()","kqueue::event#callback!()","kqueue::watcher#callback!()","kqueue::watcher#delete!()","kqueue::watcher#disable!()","kqueue::watcher#enable!()","kqueue::event#eof?()","kqueue::event#flags()","kqueue::native::flags::from_flag()","kqueue::native::flags::from_mask()","kqueue::handle_error()","kqueue::watcher#kevent!()","kqueue::watcher#native()","kqueue::event::new()","kqueue::queue::new()","kqueue::watcher::new()","kqueue::watcher::file::new()","kqueue::watcher::process::new()","kqueue::watcher::readwrite::new()","kqueue::watcher::signal::new()","kqueue::watcher::socketreadwrite::new()","kqueue::watcher::timer::new()","kqueue::queue#poll()","kqueue::queue#process()","kqueue::queue#read_events()","kqueue::queue#run()","kqueue::queue#stop()","kqueue::native::flags::to_flag()","kqueue::native::flags::to_mask()","kqueue::queue#watch_file()","kqueue::queue#watch_for_signal()","kqueue::queue#watch_process()","kqueue::queue#watch_socket_for_read()","kqueue::queue#watch_socket_for_write()","kqueue::queue#watch_stream_for_read()","kqueue::queue#watch_stream_for_write()","kqueue::queue#watch_timer()","kqueue::event#watcher()",""],"info":[["KQueue","","KQueue.html","","<p>The root module of the library, which is laid out as so:\n<p>{Queue} – The main class, where events are registered …\n"],["KQueue::Event","","KQueue/Event.html","","<p>An event produced by kqueue. Each {Watcher} can fire many events, which are\npassed to that Watcher&#39;s …\n"],["KQueue::Native","","KQueue/Native.html","","<p>This module contains the low-level foreign-function interface code for\ndealing with the kqueue C APIs …\n"],["KQueue::Native::FFI","","KQueue/Native/FFI.html","",""],["KQueue::Native::FFI::Library","","KQueue/Native/FFI/Library.html","",""],["KQueue::Native::Flags","","KQueue/Native/Flags.html","","<p>A module containing all the C-level integer flags that are used with\nkqueue.\n<p>@private\n"],["KQueue::Native::KEvent","","KQueue/Native/KEvent.html","","<p>The C struct describing a kqueue event.\n<p>@private\n"],["KQueue::Native::TimeSpec","","KQueue/Native/TimeSpec.html","","<p>The C struct describing a timeout.\n<p>@private\n"],["KQueue::Queue","","KQueue/Queue.html","","<p>Queue wraps a single instance of kqueue. It&#39;s possible to have more\nthan one instance, but usually …\n"],["KQueue::Watcher","","KQueue/Watcher.html","","<p>Watchers monitor for a single sort of event, specified by the specific\nsubclass and its parameters.  …\n"],["KQueue::Watcher::File","","KQueue/Watcher/File.html","","<p>The {Watcher} subclass for events fired when a file changes. File events\nare watched via {Queue#watch_file}. …\n"],["KQueue::Watcher::Process","","KQueue/Watcher/Process.html","","<p>The {Watcher} subclass for process events. Process events are watched via\n{Queue#watch_process}.\n"],["KQueue::Watcher::ReadWrite","","KQueue/Watcher/ReadWrite.html","","<p>The {Watcher} subclass for events fired when a stream can be read from or\nwritten to (which of these …\n"],["KQueue::Watcher::Signal","","KQueue/Watcher/Signal.html","","<p>The {Watcher} subclass for events fired when a signal is received. Signal\nevents are watched via {Queue#watch_for_signal}. …\n"],["KQueue::Watcher::SocketReadWrite","","KQueue/Watcher/SocketReadWrite.html","","<p>The {Watcher} subclass for events fired when a socket can be read from or\nwritten to (which of these …\n"],["KQueue::Watcher::Timer","","KQueue/Watcher/Timer.html","","<p>The {Watcher} subclass for events fired based on a timer. Timer events are\nwatched via {Queue#watch_timer}. …\n"],["add!","KQueue::Watcher","KQueue/Watcher.html#method-i-add-21","()","<p>Adds this Watcher to {#queue its Queue}. Note that this is done\nautomatically when the Watcher is created. …\n"],["callback!","KQueue::Event","KQueue/Event.html#method-i-callback-21","()","<p>Runs the callback for this event. This callback is associated with the\n{Watcher} that produced the event. …\n"],["callback!","KQueue::Watcher","KQueue/Watcher.html#method-i-callback-21","(event)","<p>Calls this Watcher&#39;s callback with the given {Event}.\n<p>@private @param event [Event] @return [void] …\n"],["delete!","KQueue::Watcher","KQueue/Watcher.html#method-i-delete-21","()","<p>Removes this Watcher from {#queue its Queue}. This means that events\nwon&#39;t be fired or even checked …\n"],["disable!","KQueue::Watcher","KQueue/Watcher.html#method-i-disable-21","()","<p>Disables this Watcher. This means that events won&#39;t be fired, but\nthey&#39;ll still be checked for. …\n"],["enable!","KQueue::Watcher","KQueue/Watcher.html#method-i-enable-21","()","<p>Enables this Watcher. Note that this is done automatically when the Watcher\nis created, as well as whenever …\n"],["eof?","KQueue::Event","KQueue/Event.html#method-i-eof-3F","()","<p>Returns whether the end-of-file flag has been set for this event. The\ninterpretation of this is specific …\n"],["flags","KQueue::Event","KQueue/Event.html#method-i-flags","()","<p>An array of flags, the interpretation of which is specific to each\nindividual {Watcher}.\n<p>If the Watcher …\n"],["from_flag","KQueue::Native::Flags","KQueue/Native/Flags.html#method-c-from_flag","(prefix, flag)","<p>Converts an integer from the C API into a flag.\n<p>@param prefix [String] The prefix for the C names of the …\n"],["from_mask","KQueue::Native::Flags","KQueue/Native/Flags.html#method-c-from_mask","(prefix, mask)","<p>Converts a bitmask from the C API into a list of flags.\n<p>@param prefix [String] The prefix for the C names …\n"],["handle_error","KQueue","KQueue.html#method-c-handle_error","(errno = FFI.errno)","<p>Raise an exception for a native kqueue error.\n<p>@param errno [Fixnum] The errno identifying the sort of …\n"],["kevent!","KQueue::Watcher","KQueue/Watcher.html#method-i-kevent-21","(*flags)","<p>Runs the `kevent` C call with this Watcher&#39;s kevent struct as input.\nThis effectively means telling …\n"],["native","KQueue::Watcher","KQueue/Watcher.html#method-i-native","(flags)","<p>Returns a C struct corresponding to this watcher.\n<p>@param flags [Array&lt;Symbol&gt;] Flags for the C struct&#39;s …\n"],["new","KQueue::Event","KQueue/Event.html#method-c-new","(native, queue)","<p>Creates a new event from a native event structure.\n<p>@private @param native [Native::Event] The native event …\n"],["new","KQueue::Queue","KQueue/Queue.html#method-c-new","()","<p>Creates a new, empty queue.\n"],["new","KQueue::Watcher","KQueue/Watcher.html#method-c-new","(queue, ident, filter, fflags, data, callback)","<p>Creates a new Watcher.\n<p>@private @param queue [Queue] The queue for which this watcher will be\nused. @param …\n"],["new","KQueue::Watcher::File","KQueue/Watcher/File.html#method-c-new","(queue, path, flags, callback)","<p>Creates a new file Watcher.\n<p>@private\n"],["new","KQueue::Watcher::Process","KQueue/Watcher/Process.html#method-c-new","(queue, pid, flags, callback)","<p>Creates a new process Watcher.\n<p>@private\n"],["new","KQueue::Watcher::ReadWrite","KQueue/Watcher/ReadWrite.html#method-c-new","(queue, fd, type, callback)","<p>Creates a new read/write Watcher.\n<p>@private\n"],["new","KQueue::Watcher::Signal","KQueue/Watcher/Signal.html#method-c-new","(queue, signal, callback)","<p>Creates a new signal Watcher.\n<p>@private\n"],["new","KQueue::Watcher::SocketReadWrite","KQueue/Watcher/SocketReadWrite.html#method-c-new","(queue, fd, type, low_water, callback)","<p>Creates a new socket Watcher.\n<p>@private\n"],["new","KQueue::Watcher::Timer","KQueue/Watcher/Timer.html#method-c-new","(time, callback)","<p>Creates a new timer Watcher.\n<p>@private\n"],["poll","KQueue::Queue","KQueue/Queue.html#method-i-poll","()",""],["process","KQueue::Queue","KQueue/Queue.html#method-i-process","()","<p>Blocks until there are one or more events that this queue has watchers\nregistered for. Once there are …\n"],["read_events","KQueue::Queue","KQueue/Queue.html#method-i-read_events","(blocking = true)","<p>Blocks until there are one or more filesystem events that this notifier has\nwatchers registered for. …\n"],["run","KQueue::Queue","KQueue/Queue.html#method-i-run","()","<p>Starts the queue watching for events. Blocks until {#stop} is called.\n<p>@see #process @return [void]\n"],["stop","KQueue::Queue","KQueue/Queue.html#method-i-stop","()","<p>Stop watching for events. That is, if we&#39;re in a {#run} loop, exit out\nas soon as we finish handling …\n"],["to_flag","KQueue::Native::Flags","KQueue/Native/Flags.html#method-c-to_flag","(prefix, flag)","<p>Converts a flag to the integer that the C API expects.\n<p>@param prefix [String] The prefix for the C names …\n"],["to_mask","KQueue::Native::Flags","KQueue/Native/Flags.html#method-c-to_mask","(prefix, flags)","<p>Converts a list of flags to the bitmask that the C API expects.\n<p>@param prefix [String] The prefix for …\n"],["watch_file","KQueue::Queue","KQueue/Queue.html#method-i-watch_file","(path, *flags, &callback)","<p>Watches a file or directory for changes. The `flags` parameter specifies\nwhich changes will fire events. …\n"],["watch_for_signal","KQueue::Queue","KQueue/Queue.html#method-i-watch_for_signal","(signal, &callback)","<p>Watches for signals to this process. This coexists with other signal\nfacilities, and has lower precedence. …\n"],["watch_process","KQueue::Queue","KQueue/Queue.html#method-i-watch_process","(pid, *flags, &callback)","<p>Watches a process for changes. The `flags` parameter specifies which\nchanges will fire events.\n<p>The {Event#flags} …\n"],["watch_socket_for_read","KQueue::Queue","KQueue/Queue.html#method-i-watch_socket_for_read","(fd, low_water = nil, &callback)","<p>Watches a socket and produces an event when there&#39;s data available to\nread.\n<p>Sockets which have previously …\n"],["watch_socket_for_write","KQueue::Queue","KQueue/Queue.html#method-i-watch_socket_for_write","(fd, low_water = nil, &callback)","<p>Watches a socket and produces an event when it&#39;s possible to write. The\n{Event#data} field is set …\n"],["watch_stream_for_read","KQueue::Queue","KQueue/Queue.html#method-i-watch_stream_for_read","(fd, &callback)","<p>Watches a stream and produces an event when there&#39;s data available to\nread.\n<p>This can watch files, …\n"],["watch_stream_for_write","KQueue::Queue","KQueue/Queue.html#method-i-watch_stream_for_write","(fd, &callback)","<p>Watches a stream and produces an event when it&#39;s possible to write to\nthe stream.\n<p>This can watch pipes …\n"],["watch_timer","KQueue::Queue","KQueue/Queue.html#method-i-watch_timer","(time, &callback)","<p>Sets up a watcher that fires an event once every specified interval.\n<p>The {Event#data} field contains the …\n"],["watcher","KQueue::Event","KQueue/Event.html#method-i-watcher","()","<p>The {Watcher} that produced this event.\n<p>@return [Watcher]\n"],["README","","README_md.html","","<p>rb-kqueue\n<p>This is a simple wrapper over the kqueue\nBSD event notification interface\n(supported on FreeBSD ...\n"]]}}