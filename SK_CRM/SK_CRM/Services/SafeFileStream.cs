using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System;
using System.IO;
using System.Threading;

namespace SK_CRM.Services
{
  

    /// <summary>
    /// This is a wrapper aroung a FileStream.  While it is not a Stream itself, it can be cast to
    /// one (keep in mind that this might throw an exception).
    /// </summary>
    public class SafeFileStream : IDisposable
    {
        #region Private Members
        private Mutex m_mutex;
        private Stream m_stream;
        private string m_path;
        private FileMode m_fileMode;
        private FileAccess m_fileAccess;
        private FileShare m_fileShare;
        #endregion//Private Members

        #region Constructors
        public SafeFileStream(string path, FileMode mode, FileAccess access, FileShare share)
        {
            m_mutex = new Mutex(false, String.Format("Global\\{0}", path.Replace('\\', '/')));
            m_path = path;
            m_fileMode = mode;
            m_fileAccess = access;
            m_fileShare = share;
        }
        #endregion//Constructors

        #region Properties
        public Stream UnderlyingStream
        {
            get
            {
                if (!IsOpen)
                    throw new InvalidOperationException("The underlying stream does not exist - try opening this stream.");
                return m_stream;
            }
        }

        public bool IsOpen
        {
            get { return m_stream != null; }
        }
        #endregion//Properties

        #region Functions
        /// <summary>
        /// Opens the stream when it is not locked.  If the file is locked, then
        /// </summary>
        public void Open()
        {
            if (m_stream != null)
                throw new InvalidOperationException();
            m_mutex.WaitOne();
            m_stream = File.Open(m_path, m_fileMode, m_fileAccess, m_fileShare);
        }

        public bool TryOpen(TimeSpan span)
        {
            if (m_stream != null)
                throw new InvalidOperationException();
            if (m_mutex.WaitOne(span))
            {
                m_stream = File.Open(m_path, m_fileMode, m_fileAccess, m_fileShare);
                return true;
            }
            else
                return false;
        }

        public void Close()
        {
            if (m_stream != null)
            {
                m_stream.Close();
                m_stream = null;
                m_mutex.ReleaseMutex();
            }
        }

        public void Dispose()
        {
            Close();
            GC.SuppressFinalize(this);
        }

        public static explicit operator Stream(SafeFileStream sfs)
        {
            return sfs.UnderlyingStream;
        }
        #endregion//Functions
    }
}